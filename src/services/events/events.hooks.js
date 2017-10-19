const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');

const addVenueToEvent = require('../../hooks/add-venue-to-event');

const addEventToVenue = require('../../hooks/add-event-to-venue');

const updateVenueAndArtistOnEventDeletion = require('../../hooks/update-venue-and-artist-on-event-deletion');

const artistSchema = {
  include: {
    service: 'artists',
    nameAs: 'artists',
    parentField: 'artistIds',
    childField: '_id',
  }
};

const venueSchema = {
  include: {
    service: 'venues',
    nameAs: 'venue',
    parentField: 'venueId',
    childField: '_id'
  }
};

const convertEventDateToDutchFormat = require('../../hooks/convert-event-date-to-dutch-format');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [addVenueToEvent(),  authenticate('jwt'), convertEventDateToDutchFormat() ],
    update: [ authenticate('jwt') ],
    patch: [ authenticate('jwt') ],
    remove: [ authenticate('jwt') ]

  },

  after: {
    all: [
      populate({ schema: artistSchema }),
      populate({ schema: venueSchema })
    ],
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
