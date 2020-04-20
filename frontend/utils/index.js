import { HOST } from '../constants';

/**
 * @params options: { data: Record<string, string>; method: 'string }
 */
const zFetch = async (url, method = 'GET', reqData = {}, initOptions = {}) => {
  const fetchOptions = {
    method,
    Headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
  let _url = url;
  if (method === 'GET' && reqData) {
    _url = Object.keys(reqData).reduce((acc, cur, index) => {
      const joiner = acc.includes('?') ? '&' : '?';
      return `${joiner}${cur}=${reqData[cur]}`;
    }, url);
  } else if (method === 'POST' && reqData) {
    fetchOptions.body = JSON.stringify(reqData);
  }

  try {
    const response = await fetch(url, {
      fetchOptions,
      ...initOptions,
    });
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export {
  zFetch,
};
