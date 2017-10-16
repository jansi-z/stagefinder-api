// venues-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const dateSchema = new Schema({
    title: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    artistNumber: { type: Number, required: true },
    artistIds: [{ type: Schema.Types.ObjectId, ref: 'artists' }],
  });

  const venues = new Schema({

    name: { type: String, required: true },
    photo: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true},
    description: { type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: 'users' },

    dates: [dateSchema],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('venues', venues);
};
