// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const PROFILE_UPDATE = 'PROFILE_UPDATE';
const JOIN_EVENT = 'JOIN_EVENT';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function updateArtist (hook) {
    const { type, payload } = hook.data;
    const artistId = hook.params.user.artistProfileId;

    switch(type) {

    case PROFILE_UPDATE : {
      hook.data = payload;
      return hook;
    }

    case JOIN_EVENT : {
      return hook.app.service('events').patch(payload, {
        $addToSet: { artistIds: artistId }
      })
        .then(() => {
          return hook.app.service('artists').patch(artistId, {
            $addToSet: { eventIds: payload }
          })
            .then(() => {
              return hook;
            });
        });
    }
    }

    return Promise.resolve(hook);
  };
};
