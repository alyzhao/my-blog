import { zFetch } from '../utils';

const fetchArticles = async (page, size) => {
  return zFetch('/articles/list', 'GET', {
    page,
    size,
  });
};

export {
  fetchArticles,
};
