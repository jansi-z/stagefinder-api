// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addVenueToUser (hook) {

    const user = hook.params.user;
    const venueProfile = hook.result;

    hook.app.service('users').patch(user._id, {
      $set: {
        venueProfileId: venueProfile._id
      }
    });

    return hook;
  };
};
