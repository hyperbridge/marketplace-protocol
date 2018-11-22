exports.up = knex => {
    return knex.schema
        .createTable('users', table => {
            table.increments('id').primary()
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('SET NULL')
            table.string('email', 100)
            table.string('firstName', 50)
            table.string('lastName', 50)
            table.enum('status', ['active', 'disabled']).defaultTo('active')
            //table.boolean('isActive')
            table.string('password')
            table.string('avatar', 100)
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('projects', table => {
            table.increments('id').primary()
            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table.string('description', 500)
            table.boolean('complete')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
        })
        .createTable('project_members', table => {
            table.increments('id').primary()
            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
        })
        .createTable('messages', table => {
            table.increments('id').primary()
            table.string('text', 500)
            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
        })
        .createTable('sessions', table => {
            table.string('sid').primary()
            table.json('sess').notNullable()
            table.timestamp('expired').notNullable()
        })
}

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('messages')
        .dropTableIfExists('project_members')
        .dropTableIfExists('projects')
        .dropTableIfExists('users')
        .dropTableIfExists('sessions')
}