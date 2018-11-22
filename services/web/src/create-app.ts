
import morgan = require('morgan')
import bodyParser = require('body-parser')
import helmet = require('helmet')
import Knex = require('knex')
import SwaggerParser = require('swagger-parser')
import swaggerRoutes = require('swagger-routes-express')
import api from './api'
import { Model } from 'objection'
import config from './config'
import feathers = require('@feathersjs/feathers')
import express = require('@feathersjs/express')
import rest = require('@feathersjs/express/rest')
import errorHandler = require('@feathersjs/express/errors')

import channels from './channels'
import services from './services'

const logger = require('./logger')
const appHooks = require('./hooks/app')
const authentication = require('@feathersjs/authentication')
const local = require('@feathersjs/authentication-local')
const jwt = require('@feathersjs/authentication-jwt')
const createService = require('feathers-objection')
const socketio = require('@feathersjs/socketio')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)

const knexfile = require('../knexfile')
const knex = Knex(knexfile)

Model.knex(knex)

const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions' // optional. Defaults to 'sessions'
})

export default async () => {
    const parser = new SwaggerParser({
        apiSeparator: '_',
        scopes: {},
    })

    const apiDescription = await parser.validate('api.yml')
    const connect = swaggerRoutes(api, apiDescription)

    const app = express(feathers())

    app.use(helmet())

    app.use(morgan('tiny'))

    app.configure(socketio())
    app.configure(rest())

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

    app.configure(authentication(config.authentication))
    app.configure(local())
    app.configure(jwt())

    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 10000 // ten seconds, for testing
        },
        store: store
    }))

    // var count = 0

    // app.use('/test', function(req, res, next) {
    //     var n = req.session.views || 0
    //     req.session.views = ++n
    //     res.end(n + ' views')
    // })

    app.use('/schema', async function(req, res, next) {
        const result = {}
        const tables = await knex('pg_catalog.pg_tables')
            .select('tablename')
            .where({ schemaname: 'public' })

        for (let i in tables) {
            const tableInfo = await knex.table(tables[i].tablename).columnInfo()

            result[tables[i].tablename] = tableInfo
        }

        res.end(JSON.stringify(result))
    })

    app.set('knex', knex)

    // Setup channels
    app.configure(channels)

    // Setup services
    app.configure(services.users)
    app.configure(services.messages)

    app.service('users').hooks({
        // Make sure `password` never gets sent to the client
        after: local.hooks.protect('password')
    })

    app.service('authentication').hooks({
        before: {
            create: [
                // You can chain multiple strategies
                authentication.hooks.authenticate(config.authentication.strategies)
            ],
            remove: [
                authentication.hooks.authenticate('jwt')
            ]
        }
    })

    // Add a hook to the user service that automatically replaces
    // the password with a hash of the password before saving it.
    // app.service('users').hooks({
    //     before: {
    //         find: [
    //             authentication.hooks.authenticate('jwt')
    //         ],
    //         create: [
    //             local.hooks.hashPassword({ passwordField: 'password' })
    //         ]
    //     }
    // })

    // do any other app stuff, such as wire in passport, use cors etc
    // then attach the routes
    connect(app)

    app.use(errorHandler({ logger }))

    app.hooks(appHooks)


    // add any error handlers last
    return app
}