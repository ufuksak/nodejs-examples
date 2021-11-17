const feathersKnex = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketioKnex = require('@feathersjs/socketio');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost:5432/feathers'
});

// Create a feathers instance.
const appKnex = express(feathersKnex());
// Turn on JSON parser for REST services
appKnex.use(express.json());
// Turn on URL-encoded parser for REST services
appKnex.use(express.urlencoded({ extended: true }));
// Enable REST services
appKnex.configure(express.rest());
// Enable Socket.io services
appKnex.configure(socketioKnex());
// Create Knex Feathers service with a default page size of 2 items
// and a maximum size of 4


db.schema.dropTableIfExists('clicks').then(() => {
    console.log('Dropped clicks table');
});

db.schema.dropTableIfExists('campaigns').then(() => {
    console.log('Dropped campaigns table');
});
db.schema.dropTableIfExists('accounts').then(() => {
    console.log('Dropped accounts table');
});

db.schema.dropTableIfExists('accounts').then(() => {
    console.log('Dropped accounts table');

    // Initialize your table
    return db.schema.createTable('accounts', table => {
        console.log('Creating accounts table');
        table.uuid('id').primary().unsigned();
        table.boolean('active');
        table.string('name');
        table.timestamp('created_at');
    })
});

db.schema.dropTableIfExists('campaigns').then(() => {
    return db.schema.createTable('campaigns', table => {
        console.log('Creating campaigns table');
        table.uuid('id').primary();
        table.uuid('account_id');
        table.string('name');
        table.timestamp('start_date');
        table.timestamp('end_date');
        table.timestamp('created_at');
        table.foreign('account_id').references('accounts.id');
    });
});

db.schema.dropTableIfExists('clicks').then(() => {
    return db.schema.createTable('clicks', table => {
        console.log('Creating clicks table');
        table.uuid('id').primary();
        table.uuid('campaign_id');
        table.timestamp('created_at');
        table.foreign('campaign_id').references('campaigns.id');
    });
});
