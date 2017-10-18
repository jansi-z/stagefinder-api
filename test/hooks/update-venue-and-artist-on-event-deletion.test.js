const assert = require('assert');
const updateVenueAndArtistOnEventDeletion = require('../../src/hooks/update-venue-and-artist-on-event-deletion');

describe('\'updateVenueAndArtistOnEventDeletion\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = updateVenueAndArtistOnEventDeletion();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
