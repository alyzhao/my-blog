const path = require('path');
const multer = require('multer');

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
  console.log(err);
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

/**
 * 上传图片
 */
const createUpload = (fileNamePrefix) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      const filePath = path.join(__dirname, '../../public/upload/');
      cb(null, filePath);
    },
    filename(req, file, cb) {
      const fileSuffix = file.originalname.split('.').reverse()[0];
      cb(null, `${fileNamePrefix}${Date.now()}.${fileSuffix}`);
    },
  });
  return multer({ storage });
}

module.exports = {
  saveMiddleware,
  updateMiddleware,
  resError,
  resSuccess,
  createUpload,
}
