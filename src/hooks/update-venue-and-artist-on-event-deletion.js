// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function updateVenueAndArtistOnEventDeletion (hook) {
    const eventId = hook.result._id;
    const venueId = hook.result.venueId;
    const artistIds = hook.result.artistIds;

    return hook.app.service('venues').patch(venueId, {
      $pull: { eventIds: eventId }
    })
      .then(() => {
        if (artistIds.length === 0) {
          return hook;
        } else {
          artistIds.map((artistId) => {
            return hook.app.service('artists').patch(artistId, {
              $pull: { eventIds: eventId }
            });
          })
            .then(() => {
              return hook;
            });
        }
      });
  };
};
