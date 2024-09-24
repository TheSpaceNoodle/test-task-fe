import axios, { AxiosRequestConfig } from 'axios';

interface RequestParams {
  method?: string;
  url?: string;
  data?: any;
  config?: AxiosRequestConfig;
}

class APIWrapper {
  async request({ method, url, data, config = {} }: RequestParams) {
    console.log(url);
    return await axios({
      method,
      baseURL: url,
      data,
      ...config,
    }).then(({ data }) => data);
  }

  async get(params: RequestParams) {
    return this.request({ ...params, method: 'get' });
  }

  async post(params: RequestParams) {
    return this.request({ ...params, method: 'post' });
  }

  async put(params: RequestParams) {
    return this.request({ ...params, method: 'put' });
  }

  async delete(params: RequestParams) {
    return this.request({ ...params, method: 'delete' });
  }

  async patch(params: RequestParams) {
    return this.request({ ...params, method: 'patch' });
  }
}

export default APIWrapper;
