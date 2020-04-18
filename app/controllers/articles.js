const Articles = require('../models/articles');
const { resError, resSuccess } = require('../utils');

// 文章列表接口
exports.list = (req, res) => {
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
