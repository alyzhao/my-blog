const express = require('express');
const {
  list,
  saveCover,
  add,
} = require('../controllers/articles');
const { createUpload } = require('../utils');

const articlesRouter = express.Router();

articlesRouter.get('/list', list);

// upload.single 中的名称必须和上传表单中的 name 一致
articlesRouter.post('/add', createUpload('article-cover').single('uploadFile'), saveCover, add);

module.exports = articlesRouter;
