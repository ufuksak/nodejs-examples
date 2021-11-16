const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const service = require('feathers-knex');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: 'postgres://postgres:postgres@localhost:5432/linkby'
});

// Create a feathers instance.
const app = express(feathers());
// Turn on JSON parser for REST services
app.use(express.json());
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Enable REST services
app.configure(express.rest());
// Enable Socket.io services
app.configure(socketio());
// Create Knex Feathers service with a default page size of 2 items
// and a maximum size of 4
app.use('/messages', service({
  Model: db,
  name: 'messages',
  paginate: {
    default: 2,
    max: 4
  }
}))
app.use('/accounts', service({
    Model: db,
    name: 'accounts',
    paginate: {
      default: 2,
      max: 4
    }
  }))
app.use('/campaigns', service({
    Model: db,
    name: 'campaigns',
    paginate: {
      default: 2,
      max: 4
    }
  }))
app.use('/clicks', service({
    Model: db,
    name: 'clicks',
    paginate: {
      default: 2,
      max: 4
    }
  }))
app.use(express.errorHandler());

// Clean up our data. This is optional and is here
// because of our integration tests
db.schema.dropTableIfExists('messages').then(() => {
  console.log('Dropped messages table');

  // Initialize your table
  return db.schema.createTable('messages', table => {
    console.log('Creating messages table');
    table.increments('id');
    table.string('text');
  });
}).then(() => {
  // Create a dummy Message
  app.service('messages').create({
    text: 'Message created on server'
  }).then(message => console.log('Created message', message));
});

// Start the server.
const port = 3030;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});
