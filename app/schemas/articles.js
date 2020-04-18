const { Schema } = require('mongoose');
const { saveMiddleware, updateMiddleware } = require('../utils');
const { fetch, findById, fetchPaginate } = require('../utils/schema');

const ObjectId = Schema.Types.ObjectId;

const ArticleSchema = new Schema({
  title: String,
  cover: String,
  categoryId: {
    type: ObjectId,
    ref: 'category',
  },
  // 文章内容, html 标签文本
  content: String,
  // 外键可以使用数组
  tagIds: [{ type: ObjectId, ref: 'tags' }],
  // 访问量
  // pageView: Number,
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

ArticleSchema.pre('save', saveMiddleware.bind(this));

ArticleSchema.pre('update', updateMiddleware.bind(this));

ArticleSchema.statics = {
  fetch,
  findById,
  fetchPaginate,
};

module.exports = ArticleSchema;
