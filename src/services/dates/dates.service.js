// Initializes the `dates` service on path `/dates`
const createService = require('feathers-mongoose');
const createModel = require('../../models/dates.model');
const hooks = require('./dates.hooks');
const filters = require('./dates.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dates',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dates', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dates');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
