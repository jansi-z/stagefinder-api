// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addArtistToUser (hook) {

    const user = hook.params.user;
    const artistProfile = hook.result;

    hook.app.service('users').patch(user._id, {
      $set: {
        artistProfileId: artistProfile._id
      }
    });

    return hook;
  };
};
