// artists-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const artists = new Schema({

    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true},

    quote: { type: String },
    video: { type: String },
    bio: { type: String },
    dateIds: [],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

  });

  return mongooseClient.model('artists', artists);
};
