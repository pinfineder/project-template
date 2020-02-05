const ClientError = function ClientError(code, status, info) {
  this.code = code || 'USER_ERROR';
  this.status = status || 400;
  this.info = info || '';
};

ClientError.prototype = Object.create(Error.prototype);

ClientError.middleware = async (next) => {
  try {
    await next;
  } catch (err) {
    if (err instanceof ClientError) {
      const response = {
        status: err.status,
        userMessage: err.code,
        errorCode: err.code,
        moreInfo: err.info,
      };
      this.body = response;
      this.status = err.status;
    } else {
      const response = {
        status: 500,
        userMessage: 'Internal server error',
        errorCode: 'SERVER_ERROR',
        moreInfo: '',
      };
      this.status = 500;
      this.body = response;
    }
  }
};

module.exports = ClientError;
