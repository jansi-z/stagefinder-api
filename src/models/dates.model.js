// dates-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const dates = new Schema({

    title: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    artistNumber: { type: Number, required: true },
    artistIds: [{ type: Schema.Types.ObjectId, ref: 'artists' }],
    venueId: { type: Schema.Types.ObjectId, ref: 'venues' },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('dates', dates);
};
