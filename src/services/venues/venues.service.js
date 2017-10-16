// Initializes the `venues` service on path `/venues`
const createService = require('feathers-mongoose');
const createModel = require('../../models/venues.model');
const hooks = require('./venues.hooks');
const filters = require('./venues.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'venues',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/venues', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('venues');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
