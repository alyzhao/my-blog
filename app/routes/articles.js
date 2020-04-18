const express = require('express');
const controller = require('../controllers/articles');

const articlesRouter = express.Router();

articlesRouter.get('/list', controller.list);

module.exports = articlesRouter;
