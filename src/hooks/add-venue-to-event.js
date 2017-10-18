// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addVenueToEvent (hook) {

    const venueId = hook.params.user.venueProfileId;

    hook.data = { ...hook.data, venueId: venueId }

    return Promise.resolve(hook);
  };
};
