const Articles = require('../models/articles');
const { resError, resSuccess } = require('../utils');

/**
 * 保存图片
 */
const saveCover = (req, res, next) => {
  const file = req.file;
  if (file) {
    const filename = file.filename;
    req.cover = '/upload/' + filename;
  }
  next();
}

/**
 * 添加文章接口
 */
const add = (req, res) => {
  const article = {
    ...req.body,
    cover: req.cover ? req.cover : '',
  };
  const articleDoc = new Articles(article);
  articleDoc.isNew = true;
  articleDoc.save((err, result) => {
    if (err) return resError(res, '添加文章失败！', err);
    return resSuccess(res, result);
  });
};

// 文章列表接口
const list = (req, res) => {
  const { page = 1, size = 5, search } = req.query;
  const selectParams = search
    ? JSON.parse(search)
    : {};
  Articles.fetchPaginate(selectParams, page, size, (err, result) => {
    if (err) return resError(res, '查询文章列表失败!', err);
    Articles.count(selectParams, (err, count) => {
      if (err) return resError(err, '查询文章列表失败', err);
      resSuccess(res, {
        count,
        page,
        size,
        list: result,
      });
    });
  })
};

module.exports = {
  add,
  list,
  saveCover,
};
