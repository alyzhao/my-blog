const saveMiddleware = function (next) {
  console.log('saveMiddleware this: ', this);
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
};

const updateMiddleware = function (next) {
  console.log('updateMiddleware this: ', this);
  this.meta.updateAt = Date.now();
  next();
}

const resError = (res, message, err, code = 500) => {
  return res.status(code).json({
    message,
    data: err,
  });
};

/**
 * status 状态码 100(1xx) 表示成功, 一般不需要判断
 */
const resSuccess = (res, data, message = 'success', status = 100, code = 200) => {
  res.status(code).json({
    status,
    message,
    data,
  });
};

module.exports = {
  saveMiddleware,
  updateMiddleware,
  resError,
  resSuccess,
}
