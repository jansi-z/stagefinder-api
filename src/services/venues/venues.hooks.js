const { authenticate } = require('feathers-authentication').hooks;

const addUserToVenueProfile = require('../../hooks/add-user-to-venue-profile');

const addVenueToUser = require('../../hooks/add-venue-to-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [addUserToVenueProfile()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addVenueToUser()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
