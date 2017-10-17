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

const user5 = {
  email: 'artist3@stagefinder.com',
  password: 'abcd1234'
};

const user6 = {
  email: 'artist4@stagefinder.com',
  password: 'abcd1234'
};

const user7 = {
  email: 'artist5@stagefinder.com',
  password: 'abcd1234'
};

const user8 = {
  email: 'artist6@stagefinder.com',
  password: 'abcd1234'
};

const user9 = {
  email: 'artist7@stagefinder.com',
  password: 'abcd1234'
};

const user10 = {
  email: 'artist8@stagefinder.com',
  password: 'abcd1234'
};

const user11 = {
  email: 'artist9@stagefinder.com',
  password: 'abcd1234'
};

const user12 = {
  email: 'artist10@stagefinder.com',
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

const user13 = {
  email: 'venue3@stagefinder.com',
  password: 'abcd1234'
};

const user14 ={
  email: 'venue4@stagefinder.com',
  password: 'abcd1234'
};
const user15 = {
  email: 'venue5@stagefinder.com',
  password: 'abcd1234'
};

const user16 = {
  email: 'venue6@stagefinder.com',
  password: 'abcd1234'
};

const user17 = {
  email: 'venue7@stagefinder.com',
  password: 'abcd1234'
};

const user18 = {
  email: 'venue8@stagefinder.com',
  password: 'abcd1234'
};

const user19 = {
  email: 'venue9@stagefinder.com',
  password: 'abcd1234'
};

const user20 = {
  email: 'venue9@stagefinder.com',
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

const newArtist3 ={
  name: 'Kanye West',
  photo: 'http://s3.amazonaws.com/hiphopdx-production/2016/12/kanye-west-pink-hair-700x485.jpg',
  description: 'I rap about stuff and love fish-sticks',
  city: 'Den Helder',
};

const newArtist4 = {
  name: 'Elliot Smith',
  photo: 'http://www.rockaxis.com.co/sites/default/files/node/novedades/imagen/121084.jpg',
  description: 'I sound monotone but you\'ll get used to me',
  city: 'Maastricht',
};

const newArtist5 = {
  name: 'Jason Mraz',
  photo: 'http://musicserver.cz/img/big/80725.jpg',
  description: 'I sing emotional songs',
  city: 'Urk',
};

const newArtist6 = {
  name: 'Taylor Swift',
  photo: 'https://askingradio.com/wp-content/uploads/2017/10/Taylor-Swift-revenge-nerds-e1507288366571-700x485.jpg',
  description: 'I do have many ex-boyfriends and I tend to sing about them',
  city: 'Enschede',
};

const newArtist7 ={
  name: 'Black Rebel Motorcycle club',
  photo: 'https://s-media-cache-ak0.pinimg.com/originals/3e/ac/6b/3eac6be193567160f4f5e2ca2359e476.jpg',
  description: 'rocknroll ish',
  city: 'Assen',
};

const newArtist8 = {
  name: 'Skrillex',
  photo: 'https://img.memecdn.com/where-skrillex-gets-his-inspiration_o_762360.jpg',
  description: 'I create noise and people used to like it',
  city: 'Breda',
};

const newArtist9 = {
  name: 'U2',
  photo: 'https://i1.wp.com/news.u2fanlife.com/wp-content/uploads/2013/10/u2-new-york-octubre-2013.jpg?ssl=1',
  description: 'We are trying to save the world while making shitty music',
  city: 'Eindhoven',
};

const newArtist10 = {
  name: 'Beyonce',
  photo: 'http://www.urbaninsite.com/wp-content/uploads/2016/01/aa15.jpg',
  description: 'I sing songs',
  city: 'Groningen',
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

const newVenue3 = {
  name: 'Heineken Music Hall',
  photo: 'https://image-ticketfly.imgix.net/00/02/36/27/09-og.jpg?w=700&h=485',
  city: 'Amsterdam',
  address: 'ArenA Boulevard 590',
  description: 'muziekjes',
};
const newVenue4 = {
  name: 'Tivoli Vredenburg',
  photo: 'https://www.tivolivredenburg.nl//content/cache/originals/img2605.755x455.jpg',
  city: 'Utrecht',
  address: 'Vredenburgkade 11',
  description: 'De plek bij uitstek voor de beste live optredens van Utrecht',
};

const newVenue5 = {
  name: 'Kopi Susu',
  photo: 'https://www.google.nl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjQ1tn3rPfWAhVIKlAKHcUgCIwQjRwIBw&url=http%3A%2F%2Fwww.mcu-nu.nl%2FStiltewandelingen%2Fwandeling_west.php&psig=AOvVaw3WUY9n0ZHaA24bCML8UY89&ust=1508319171318951',
  city: 'Utrecht',
  address: 'J.P Coenstraat 69',
  description: 'Drankjes, eten en muziek',
};

const newVenue6 = {
  name: '013',
  photo: 'http://www.013.nl/uploads/images/background/5357a9df84cbd.jpg',
  city: 'Tilburg',
  address: 'Veemarktstraat 44',
  description: 'De plek bij uitstek voor de beste live optredens van Tilburg',
};

const newVenue7 = {
  name: 'Bibelot',
  photo: 'https://www.bibelot.net/data/albums/12/100_l.jpg',
  city: 'Dordrecht',
  address: 'Noordendijk 148',
  description: 'Superleuke tent, maar het blijft Dordrecht',
};

const newVenue8 = {
  name: 'Poppodium Stathe',
  photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/18/f5/ab/the-entrance.jpg',
  city: 'Utrecht',
  address: 'Rozenstraat 15',
  description: 'Gewoon Gezellig',
};

const newVenue9 = {
  name: 'Muziekgieterij',
  photo: 'http://www.museumnachtmaastricht.nl/application/files/8714/8412/3220/muziekgieterij.jpg',
  city: 'Maastricht',
  address: 'Boschstraat 7',
  description: 'De plek bij uitstek voor de beste live optredens van Maastricht',
};

const newVenue10 = {
  name: 'Crazy Pianos',
  photo: 'https://euro-entertainment.nl/wp-content/uploads/woocommerce_pics/17/1/Crazy-Pianos-on-Tour-Euro-Entertainment.jpg',
  city: 'Den Haag',
  address: 'Strandweg 21',
  description: 'Eten en muziek',
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

feathersClient.service('users').create(user5)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user5.email,
      password: user5.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist3)
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

feathersClient.service('users').create(user6)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user6.email,
      password: user6.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist4)
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

feathersClient.service('users').create(user7)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user7.email,
      password: user7.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist5)
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

feathersClient.service('users').create(user8)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user8.email,
      password: user8.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist6)
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

feathersClient.service('users').create(user9)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user9.email,
      password: user9.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist7)
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

feathersClient.service('users').create(user10)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user10.email,
      password: user10.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist8)
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

feathersClient.service('users').create(user11)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user11.email,
      password: user11.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist9)
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

feathersClient.service('users').create(user12)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user12.email,
      password: user12.password
    })
      .then(() => {
        feathersClient.service('artists').create(newArtist10)
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

feathersClient.service('users').create(user13)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user13.email,
      password: user13.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue3)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user14)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user14.email,
      password: user14.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue4)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user15)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user15.email,
      password: user15.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue5)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user16)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user16.email,
      password: user16.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue6)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user17)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user17.email,
      password: user17.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue7)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user18)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user18.email,
      password: user18.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue8)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user19)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user19.email,
      password: user19.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue9)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

feathersClient.service('users').create(user20)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user20.email,
      password: user20.password
    })
      .then(() => {
        feathersClient.service('venues').create(newVenue10)
          .then((result) => {
            console.log('venue seeded...', result);
          }).catch((error) => {
            console.error('Error seeding venue!', error.message);
          });
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });
