const mongoose = require('mongoose');
var ArticlesSchema = require('../schemas/articles');
var Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;
