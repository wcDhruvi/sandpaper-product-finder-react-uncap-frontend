import axios from 'axios';
import { ApiBaseUrl } from './Constent';


const instance = axios.create();

const ApiService = () => {
    const baseUrl = ApiBaseUrl;

    const fetchData = async (method, url, data, isFormData, header) => {
        const config = {
            headers: {
                ...(header || {}),
                "content-type": isFormData ? "multipart/form-data" : "application/json",
            }
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

    const getData = async (url, header) => await fetchData('get', url, null, false, header);

    const postData = async (url, data, isFormData, header) => await fetchData('post', url, data, isFormData, header);

    const putData = async (url, data, isFormData, header) => await fetchData('put', url, data, isFormData, header);

    const deleteData = async (url, header) => await fetchData('delete', url, null, false, header);

    // //---------------------------------------------------------------------//


    //--------------------------------API----------------------------------//
    return {
        getFilter: async (payload) => await postData(`${baseUrl}/product-finder`, payload)
    }

}

export default ApiService;
