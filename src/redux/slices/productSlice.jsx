import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProductStatus', async (params) => {
  const { category, search } = params;
  const { data } = await axios.get(
    `https://6489b0075fa58521cab00ef9.mockapi.io/value?${category}&order=desc&${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading', // Loading | success | error
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = productSlice.actions;
export default productSlice.reducer;
