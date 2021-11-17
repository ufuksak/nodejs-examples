const path = require('path');
const feathers = require('feathers');
const errorHandler = require('feathers-errors/handler')
const { FeathersError } = require("@feathersjs/errors");
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const service = require('feathers-sequelize');
const feathersHook = require('@feathersjs/feathers');

const appHook = feathersHook();
const sequelize = new Sequelize('feathers', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

const Op = Sequelize.Op;

const accounts = sequelize.define('accounts', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at: {
    type: Sequelize.TIME,
    allowNull: false
  }
}, {
  freezeTableName: true
});

const campaigns = sequelize.define('campaigns', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  account_id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: {
    type: Sequelize.TIME,
    allowNull: false
  },
  end_date: {
    type: Sequelize.TIME,
    allowNull: false
  },
  created_at: {
    type: Sequelize.TIME,
    allowNull: false
  }
}, {
  freezeTableName: true
});

const clicks = sequelize.define('clicks', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  campaign_id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  created_at: {
    type: Sequelize.TIME,
    allowNull: false
  }
}, {
  freezeTableName: true
});

// Create a feathers instance.
const app = feathers()
  // Enable REST services
  .configure(rest())
  // Enable Socket.io services
  .configure(socketio())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({ extended: true }))
  // Create an in-memory Feathers service
  .use('/accounts', service({
    Model: accounts
  }))
  .use('/campaigns', service({
    Model: campaigns
  }))
  .use('/clicks', service({
    Model: clicks
  }))
  .use(errorHandler());

  class UnexpectedRecordType extends FeathersError {
    constructor(message, data) {
      super(message, 'unsupported-record-id', 415, 'UnexpectedRecordType', data);
    }
  }
  
  const error = new UnexpectedRecordType('Not supported');

// Start the server.
const port = 3030;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});
