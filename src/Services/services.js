import {
  requestInterceptor,
  responseInterceptor,
} from '../Config/interceptors';

import { API_URL } from '../Config/constants';

export const request = (resource, init) => {
  requestInterceptor(resource, init)
    .then((response) => {
      responseInterceptor(response);
    })
    .catch((error) => {
      console.error(
        `Ha ocurrido un error al pedir el recurso ${resource} con el mensaje: ${error.message}`
      );
    });
};

export const get = (endpoint, params, options = {}) => {
  const url = new URL(API_URL + endpoint);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return request(url, {
    method: 'GET',
    headers: 'headers' in options ? options.headers : {},
    ...options,
  });
};

export const post = (endpoint, body, options = {}) => {
  const url = new URL(API_URL + endpoint);
  return request(url, {
    method: 'GET',
    headers: 'headers' in options ? options.headers : {},
    body: JSON.stringify(body),
    ...options,
  });
};
