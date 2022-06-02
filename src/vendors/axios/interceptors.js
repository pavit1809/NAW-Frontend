const successRequestFunc = request => {
  // eslint-disable-next-line no-undef
  request.baseURL = process.env.REACT_APP_BASE_API_URL
  return request;
};

export const failureRequestFunc = error => {
  // eslint-disable-next-line no-undef
  return Promise.reject(error);
};

export const interceptors = (axios) => {
  axios.interceptors.request.use(successRequestFunc, failureRequestFunc);
  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      // eslint-disable-next-line no-undef
      return Promise.reject(error);
    }
  );
};
