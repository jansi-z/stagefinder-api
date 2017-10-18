// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addEventToVenue (hook) {

    const venueId = hook.params.user.venueProfileId;
    const eventId = hook.result._id;

    hook.app.service('venues').patch(venueId, {
      $addToSet: {
        eventIds: eventId
      }
    });
    return Promise.resolve(hook);
  };
};
