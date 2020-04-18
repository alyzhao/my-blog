const { Schema } = require('mongoose');
const { saveMiddleware, updateMiddleware } = require('../utils');
const { fetch, findById } = require('../utils/schema');

const ObjectId = Schema.Types.ObjectId;

const CategorySchema = new Schema({
  name: String,
  articleIds: [{ type: ObjectId, ref: 'Articles' }],
  meta: {
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

CategorySchema.pre('save', saveMiddleware);

CategorySchema.pre('update', updateMiddleware);

CategorySchema.statics = {
  fetch,
  findById,
};

module.exports = CategorySchema;
