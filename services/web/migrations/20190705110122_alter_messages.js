
exports.up = function (knex, Promise) {
    return knex.schema
        .table('messages', table => {
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('messages')
                .onDelete('SET NULL')
        })
        .table('discussions', table => {
            table.text('content')
            table.integer('parentId').unsigned()
            table.integer('rootMessageId').unsigned()
            table.enum('type', ['discussion', 'chat', 'both']).defaultTo('discussion')
        })
}

exports.down = function (knex, Promise) {
    return knex.schema
        .table('messages', table => {
            table.dropColumn('parentId')
        })
        .table('discussions', table => {
            table.dropColumn('content')
            table.dropColumn('parentId')
            table.dropColumn('rootMessageId')
            table.dropColumn('type')
        })
}