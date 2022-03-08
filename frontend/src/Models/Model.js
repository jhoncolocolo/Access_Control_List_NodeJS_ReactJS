'use strict';

import {HTTP} from '../resources/resources';

const MyModel = class Model {
    constructor() {
        this.data = [];
    }

    /**
     * Get All Data
     * @param path
     */
    static all(path) {
        return HTTP.get(path, {
            headers: { authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.accessToken },
        });
    }

    /**
     * Get All Data With Params
     * @param path
     * @param params
     */
    static query(path, params) {
        return HTTP.get(path, {
            params: params,
            headers: { authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.accessToken },
        });
    }

    /**
     * Find Data
     * @param path
     * @param id
     */
    static find(path, id) {
        return HTTP.get(path + '/' + id, {
            headers: { authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.accessToken },
        });
    }

    /**
     * Save Data
     * @param path
     * @param params
     * @returns {*|AxiosPromise}
     */
    static save(path, params) {
        return HTTP.post(path, params, {
            headers: { authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.accessToken },
        });
    }

    /**
     * Update Info
     * @param path
     * @param params
     * @returns {AxiosPromise}
     */
    static updateData(path, id, params) {
        return HTTP.put(path + id, params,{
            headers: { authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.accessToken },
        });
    }

    /**
     * Destroy Data
     * @param path
     * @param id
     */
    static remove(path, id) {
        return HTTP.delete(path + id, {
            headers: { authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.accessToken },
        });
    }
};

export default MyModel;