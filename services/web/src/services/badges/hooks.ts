const { authenticate } = require('@feathersjs/authentication').hooks

const beforeCreate = function(options = {}) {
    return async context => {
        context.data.accountId = context.params.user.id

        return context
    }
}

const beforeUpdate = function(options = {}) {
    return async context => {
        // const item = await context.app.service('/ideas').get(context.id)

        // context.data = {
        //     ...item,
        //     ...context.data
        // }

        return context
    }
}

const afterUpdate = function(options = {}) {
    return async context => {
        context.result = {
            name: context.data.name,
            avatar: context.data.avatar
        }

        return context
    }
}

const accessGate = function(options = {}) {
    return async context => {
        //console.log(context)
        const { app, method, result, params } = context
        const items = method === 'find' ? result.data : [result]
        let account = params.user

        if (!account.id) {
            throw new Error('You dont have access to do that')
        }

        await Promise.all(items.map(async item => {
            if (method === 'create') {
            }
            else if (method === 'update') {
            }

            if (!item) {
                throw new Error('Idea not found')
            }

            if (item.accountId !== account.id) {
                throw new Error('You dont have access to do that')
            }
        }))

        return context
    }
}

export const before = {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [authenticate('jwt'), beforeCreate()],
    update: [authenticate('jwt'), beforeUpdate()],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
}

export const after = {
    all: [],
    find: [],
    get: [],
    create: [accessGate()],
    update: [accessGate(), afterUpdate()],
    patch: [accessGate()],
    remove: [accessGate()]
}

export const error = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
}