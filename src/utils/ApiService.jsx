import axios from 'axios';
import { ApiBaseUrl } from './Constent';


const instance = axios.create();

const ApiService = () => {
    const baseUrl = ApiBaseUrl;

    const fetchData = async (method, url, data, isFormData, header, options = {}) => {
        const config = {
            headers: {
                ...(header || {}),
                "content-type": isFormData ? "multipart/form-data" : "application/json",

            },
            signal: options?.signal
        };

        let result = '';

        try {

            const res = await instance[method](url, data, config);
            if (res.status === 200) {
                result = { ...res.data, apiStatus: res.status };
            } else {
                result = { ...res.data, apiStatus: res.status };
            }
        } catch (e) {
            result = { ...e?.response?.data, apiStatus: e.status, message: e.message };
        }

        return result;
    };


    // //----------------------------API-Methods-----------------------------//

    const getData = async (url, header, options) =>
        await fetchData('get', url, null, false, header, options);

    const postData = async (url, data, isFormData, header, options) =>
        await fetchData('post', url, data, isFormData, header, options);

    const putData = async (url, data, isFormData, header, options) =>
        await fetchData('put', url, data, isFormData, header, options);

    const deleteData = async (url, header, options) =>
        await fetchData('delete', url, null, false, header, options);

    // //---------------------------------------------------------------------//


    //--------------------------------API----------------------------------//
    return {
        getFilter: async (payload, options = {}) =>
            await postData(`${baseUrl}/product-finder`, payload, false, null, options)
    }

}

export default ApiService;
