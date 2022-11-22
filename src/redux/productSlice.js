import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

// get product api 

export const getProductData = createAsyncThunk('products//get-product', async (data, thunkAPI) => {
    try {
        return await productService.getProductData(data)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// add product api

export const addProductData = createAsyncThunk('products/add-product', async (addData, thunkAPI) => {
    try {
        return await productService.addProductData(addData)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// delete product by Id

export const deleteProductData = createAsyncThunk('products/del-product', async (productId, thunkAPI) => {
    try {
        return await productService.deleteProductData(productId)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProductData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = action.payload
            })
            .addCase(getProductData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
                state.products = null
            })
            .addCase(addProductData.pending, state => {
                state.isLoading = true
            })
            .addCase(addProductData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.products.push(action.payload)
                console.log(state.products, "products")
            })
            .addCase(addProductData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
                state.products = null
            })
            .addCase(deleteProductData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProductData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = state.products.filter((pro) => pro._id !== action.payload._id)

            })
            .addCase(deleteProductData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
                state.products = null
            })
    }
})

export const { reset } = productSlice.actions;
export default productSlice.reducer