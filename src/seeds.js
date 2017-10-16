/* eslint-disable no-console */

const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user1 = {
  email: 'artist1@stagefinder.com',
  password: 'abcd1234'
};

const user2 = {
  email: 'artist2@stagefinder.com',
  password: 'abcd1234'
};

const user3 = {
  email: 'venue1@stagefinder.com',
  password: 'abcd1234'
};

const user4 = {
  email: 'venue2@stagefinder.com',
  password: 'abcd1234'
};

const feathersClient = feathers();

const newArtist1 = {
  name: 'Radiohead',
  photo: 'https://express-k.kz/upload/iblock/404/404ddda17b2bcfaedcff63948ad8377b.jpg',
  description: 'We play a mix between schlager, rock \'n roll, and psychedelic folk',
  city: 'IJmuiden',
};

const newArtist2 = {
  name: 'The Beatles',
  photo: 'http://www.beatlesource.com/savage/1962/62.03.xx%20suits/02.jpg',
  description: 'We aim to recreate the 60s sound',
  city: 'Leeuwarden',
};

const newVenue1 = {
  name: '\'t Oude Pothuijs',
  photo: 'https://indebuurt.nl/utrecht/wp-content/uploads/2017/05/1933205_1125776194129083_6220711878051688364_o-e1494507561146.jpg',
  city: 'Utrecht',
  address: 'Oudegracht 279',
  description: 'Al jaren de beste plek voor up and coming bandjes en artiesten in de Domstad',
};

const newVenue2 = {
  name: 'De Melkweg',
  photo: 'https://www.roarezine.nl/wp-content/uploads/2013/05/frankturnermelkweg-5-BorderMaker.jpg',
  city: 'Amsterdam',
  address: 'Lijnbaansgracht 234A',
  description: 'De plek bij uitstek voor de beste live optredens van Amsterdam',
};

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user1)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user1.email,
      password: user1.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist1)
          .then((result) => {
            console.log('artist seeded...', result);
          }).catch((error) => {
            console.error('Error seeding artist!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user2)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user2.email,
      password: user2.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist2)
          .then((result) => {
            console.log('artist 2 seeded...', result);
          }).catch((error) => {
            console.error('Error seeding artist!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user3)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user3.email,
      password: user3.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue1)
          .then((result) => {
            console.log('Venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user4)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user4.email,
      password: user4.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue2)
          .then((result) => {
            console.log('Venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });
