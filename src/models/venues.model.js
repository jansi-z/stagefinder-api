// venues-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const venues = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true},
    description: { type: String, required: true},

    dateIds: [{ type: Schema.Types.ObjectId, ref: 'dates'}],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('venues', venues);
};
