// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function sendEventToElasticsearch (hook) {

    return hook.app.service('search').create(hook.result)
      .then(() => {
        return hook;
      });      
  };
};
