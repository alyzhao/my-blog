const { Schema } = require('mongoose');
const { saveMiddleware, updateMiddleware } = require('../utils');
const { fetch, findById } = require('../utils/schema');

const ObjectId = Schema.Types.ObjectId;

const TagsSchema = new Schema({
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

TagsSchema.pre('save', saveMiddleware);

TagsSchema.pre('update', updateMiddleware);

TagsSchema.statics = {
  fetch,
  findById,
};

module.exports = TagsSchema;
