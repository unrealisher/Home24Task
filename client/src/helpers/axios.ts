import axiosSource, { AxiosRequestConfig, AxiosPromise } from 'axios'

export const axios = <P>(config: AxiosRequestConfig, retriesCount: number = 0, currentRetry: number = 0): AxiosPromise<P> => {
    return axiosSource(config).catch(error => {
        if (currentRetry < retriesCount) {
            return axios(config, retriesCount, currentRetry + 1);
        }

        return Promise.reject(error);
    });
}
