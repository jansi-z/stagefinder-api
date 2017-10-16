// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const users = new mongooseClient.Schema({

    email: {type: String, unique: true},
    password: { type: String },


    googleId: { type: String },

    facebookId: { type: String },

    artistProfileId: { type: Schema.Types.ObjectId, ref: 'artists' },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('users', users);
};
