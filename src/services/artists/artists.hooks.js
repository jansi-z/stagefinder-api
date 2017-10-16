const { authenticate } = require('feathers-authentication').hooks;

const addArtistToUser = require('../../hooks/add-artist-to-user');

const addUserToArtistProfile = require('../../hooks/add-user-to-artist-profile');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [addUserToArtistProfile()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addArtistToUser()],
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
