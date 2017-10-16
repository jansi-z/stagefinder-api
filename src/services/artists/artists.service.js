// Initializes the `artists` service on path `/artists`
const createService = require('feathers-mongoose');
const createModel = require('../../models/artists.model');
const hooks = require('./artists.hooks');
const filters = require('./artists.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'artists',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/artists', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('artists');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
