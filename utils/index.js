import { APP_ID } from '../constants';

const getDefaultHeaders = (headers = {}) => ({
  headers: { 'app-id': APP_ID, ...headers },
});

const httpGet = async ({ url, options = {} }) => {
  try {
    const response = await fetch(url, { ...options, ...getDefaultHeaders(options?.headers) });

    return response.json();
  } catch (err) {
    console.trace('/utils/index/httpGet', err);
  }
};

export default httpGet;
