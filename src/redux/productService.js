import axios from "axios";
import { addProductAPI, API_URL, deleteProductAPI, getProductAPI } from "../helpers/APIRequest";


// get products

const getProductData = async (data) => {
    console.log(data, ' data api ')
    const result = await axios.get(API_URL + getProductAPI, data)
    console.log(result.data, 'get product data api calling...')
    return result.data
}

// add product 
const addProductData = async (addData) => {
    const res = await axios.post(API_URL + addProductAPI, addData)
    return res.data;
}
// delete product 
const deleteProductData = async (productId) => {
    const res = await axios.delete(`${API_URL}${deleteProductAPI}${productId}`)
    console.log(res.data, "res deleted")
    return res.data;
}

const productService = {
    getProductData,
    addProductData,
    deleteProductData
}
export default productService
