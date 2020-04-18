const mongoose = require('mongoose');
var TagsSchema = require('../schemas/tags');
var Tags = mongoose.model('Tags', TagsSchema);

module.exports = Tags;
