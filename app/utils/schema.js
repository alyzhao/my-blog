const fetch = function (cb) {
  console.log('fetch this: ', this);
  return this
    .find({})
    .sort('meta.createAt')
    .exec(cb);
};

const findById = function (id, cb) {
  console.log('findById this: ', this);
  return this
    .findOne({ _id: id })
    .exec(cb);
};

const fetchPaginate = function (select, page, size, cb) {
  console.log('fetchPaginate this:', this);
  return this
    .find(select)
    .skip((page - 1) * size)
    .sort('meta.createAt')
    .exec(cb);
}

module.exports = {
  fetch,
  findById,
  fetchPaginate,
};
