// events-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const events = new Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String },

    time: { type: String, required: true },
    date: { type: String, required: true },
    paid: { type: Number, default: null },
    artistCount: { type: Number, required: true },

    artistIds: [{ type: Schema.Types.ObjectId, ref: 'artists'}],
    venueId: { type: Schema.Types.ObjectId, ref: 'venues' },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('events', events);
};
