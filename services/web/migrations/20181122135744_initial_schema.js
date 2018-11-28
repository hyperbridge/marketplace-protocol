exports.up = knex => {
    return knex.schema
        .createTable('accounts', table => {
            table.increments('id').primary()
            // table
            //     .integer('parentId')
            //     .unsigned()
            //     .references('id')
            //     .inTable('accounts')
            //     .onDelete('SET NULL')
            table.string('email', 100)
            table.string('firstName', 50)
            table.string('lastName', 50)
            table.string('address', 100)
            table.string('avatar', 100)
            table.enum('status', ['active', 'disabled']).defaultTo('active')
            table.string('password')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('profiles', table => {
            table.increments('id').primary()
            table
                .integer('accountId')
                .unsigned()
                .references('id')
                .inTable('accounts')
                .onDelete('SET NULL')
            table.string('name', 100)
            table.string('address', 100)
            table.string('avatar', 100)
            table.enum('status', ['active', 'disabled']).defaultTo('active')
            table.enum('role', ['user', 'developer', 'curator', 'admin']).defaultTo('user')
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
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
            table.string('description', 500)
            table.text('about')
            table.enum('status', ['Inactive', 'Draft', 'Pending', 'Contributable', 'InDevelopment', 'Refundable', 'Rejected', 'Completed']).defaultTo('Draft')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('project_members', table => {
            table.increments('id').primary()
            table
                .integer('profileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
        })
        .createTable('project_pledges', table => {
            table.increments('id').primary()
            table
                .integer('profileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
            table.json('meta')
        })
        .createTable('bounties', table => {
            table.increments('id').primary()
            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
            table.string('description', 500)
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('realms', table => {
            table.increments('id').primary()
            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table.string('description', 500)
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('communities', table => {
            table.increments('id').primary()
            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table.string('description', 500)
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('products', table => {
            table.increments('id').primary()
            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table.string('description', 500)
            table.text('about')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('messages', table => {
            table.increments('id').primary()
            table.string('type', 100)
            table.string('text', 500)
            table
                .integer('profileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('assets', table => {
            table.increments('id').primary()
            table.string('type', 100)
            table.string('text', 500)
            table.string('standard', 100)
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('assets')
                .onDelete('SET NULL')
            table
                .integer('profileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        .createTable('asset_offers', table => {
            table.increments('id').primary()
            table.string('type', 100)
            table.string('text', 500)
            table
                .integer('assetId')
                .unsigned()
                .references('id')
                .inTable('assets')
                .onDelete('SET NULL')
            table
                .integer('fromId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('toId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        // .createTable('profile_friends', table => {
        //     table.increments('id').primary()
        //     table.string('type', 100)
        //     table.string('text', 500)
        //     table
        //         .integer('fromId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table
        //         .integer('toId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table.timestamp('createdAt')
        //     table.timestamp('updatedAt')
        //     table.json('meta')
        // })
        .createTable('nodes', table => {
            table.increments('id').primary()
            table.string('type', 100)
            table.string('text', 500)
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('nodes')
                .onDelete('SET NULL')
            table
                .integer('accountId')
                .unsigned()
                .references('id')
                .inTable('accounts')
                .onDelete('CASCADE')
            table
                .integer('profileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
            table
                .integer('productId')
                .unsigned()
                .references('id')
                .inTable('products')
                .onDelete('CASCADE')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
        // .createTable('sessions', table => {
        //     table.string('sid').primary()
        //     table.json('sess').notNullable()
        //     table.timestamp('expired').notNullable()
        // })
        .createTable('tags', table => {
            table.increments('id').primary()
            table.string('name', 100)
            table
                .integer('profileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
            table
                .integer('productId')
                .unsigned()
                .references('id')
                .inTable('products')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
            table.json('meta')
        })
}

exports.down = knex => {
    return knex.schema
        //.dropTableIfExists('profile_friends')
        .dropTableIfExists('tags')
        .dropTableIfExists('nodes')
        .dropTableIfExists('realms')
        .dropTableIfExists('communities')
        .dropTableIfExists('messages')
        .dropTableIfExists('products')
        .dropTableIfExists('project_pledges')
        .dropTableIfExists('project_members')
        .dropTableIfExists('asset_offers')
        .dropTableIfExists('assets')
        .dropTableIfExists('bounties')
        .dropTableIfExists('projects')
        .dropTableIfExists('sessions')
        .dropTableIfExists('profiles')
        .dropTableIfExists('accounts')
}