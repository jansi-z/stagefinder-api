const { authenticate } = require('feathers-authentication').hooks;

const addVenueToEvent = require('../../hooks/add-venue-to-event');

const addEventToVenue = require('../../hooks/add-event-to-venue');

const updateVenueAndArtistOnEventDeletion = require('../../hooks/update-venue-and-artist-on-event-deletion');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [addVenueToEvent()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addEventToVenue()],
    update: [],
    patch: [],
    remove: [updateVenueAndArtistOnEventDeletion()]
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
