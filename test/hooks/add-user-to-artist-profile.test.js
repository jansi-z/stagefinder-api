const assert = require('assert');
const addUserToArtistProfile = require('../../src/hooks/add-user-to-artist-profile');

describe('\'addUserToArtistProfile\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addUserToArtistProfile();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
