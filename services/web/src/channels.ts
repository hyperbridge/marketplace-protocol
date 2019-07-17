import Discussions, { DiscussionType } from './models/discussion'
import Project from '../src/models/project'

export default async function (app) {
    app.on('connection', connection => {
        // On a new real-time connection, add it to the anonymous channel
        // app.channel('anonymous').join(connection)
        // it says nothing about anonymous channels
    })

    const commonChannels = await Discussions
        .query()
        .whereIn('type', [DiscussionType.Chat, DiscussionType.Both])

    app.on('login', async (authResult, { connection }) => {
        console.log('On Login event app.on(...)', (connection ? 'Connection is set' : '!!! no connection !!!'))
        // connection can be undefined if there is no
        // real-time connection, e.g. when logging in via REST
        if (connection) {
            // Obtain the logged in account from the connection
            // const account = connection.account

            // The connection is no longer anonymous, remove it
            // app.channel('anonymous').leave(connection)
            commonChannels.forEach(async item => {
                // Add it to the authenticated account channel
                //const channel = app.channel(item.key)
                // making sure one login at the time
               /* await app.channel(item.key).connections.forEach(conn => {
                    console.log(conn.accountId, connection.accountId)
                    if (conn.accountId == connection.accountId) app.channel(item.key).leave(conn)
                })*/
                app.channel(item.key).join(connection)
                //console.log('connect to channel' + item.key, channel)
            })
        }
    })
    //.service('messages')
    app.publish((data, context) => {
        const { discussionId } = context.arguments[0]
        if (!discussionId) return []
        //console.log(context.result);
        // console.log(app.channel(commonChannels[0].key), commonChannels[0].key)

        // return app.channel(commonChannels[0].key).send(data)

        const result = commonChannels // same as flatMap
            .map(channel => {
                if (channel.id !== discussionId) return [];

                return [app.channel(channel.key).send(data)]
            })
            .reduce((acc, val) => acc.concat(val), []);

        console.log(result) // what a nigth mare
        return result
    })
}
