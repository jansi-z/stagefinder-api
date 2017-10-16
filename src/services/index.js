const users = require('./users/users.service.js');
const artists = require('./artists/artists.service.js');
const venues = require('./venues/venues.service.js');
const dates = require('./dates/dates.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(artists);
  app.configure(venues);
  app.configure(dates);
};
