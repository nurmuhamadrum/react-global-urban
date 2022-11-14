import axios from "axios";

const BASE_URL = 'https://run.mocky.io/v3/';

export const getCategoryList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `${BASE_URL}ff380808-3bc9-491c-b59c-47b310bd27b0`
            const response = await axios.get(url)

            if (response?.status === 200) {
                resolve(response?.data?.category)
            } else {
                resolve(false)
            }
        } catch (error) {
            console.log('error@getCategoryList', error);
            resolve(false)
        }
    })
}

export const getProductList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `${BASE_URL}f8942e5c-ba56-47d9-b2c8-77072dd8053e`
            const response = await axios.get(url)

            if (response?.status === 200) {
                resolve(response?.data?.product)
            } else {
                resolve(false)
            }
        } catch (error) {
            console.log('error@getProductList', error);
            resolve(false)
        }
    })
}