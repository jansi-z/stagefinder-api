const { authenticate } = require('feathers-authentication').hooks;

const addUserToVenueProfile = require('../../hooks/add-user-to-venue-profile');

const addVenueToUser = require('../../hooks/add-venue-to-user');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), addUserToVenueProfile()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
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
