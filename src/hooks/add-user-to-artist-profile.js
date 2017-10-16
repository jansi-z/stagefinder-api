// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addUserToArtistProfile (hook) {

    const user = hook.params.user;

    hook.data = { ...hook.data, userId: user._id }

    return hook;
  };
};
