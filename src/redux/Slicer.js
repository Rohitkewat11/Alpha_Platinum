import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    cart: [],
  },
  reducers: {
    setCartData: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCartData: (state, action) => {
      const removeDataID = action.payload;
      console.log(removeDataID);
      state.cart = state.cart.filter((item) => item.id !== removeDataID);
    },
    addCartItemCount: (state, action) => {
      const id = action.payload;
      console.log(state.cart);
      const item = state.cart.find(item => item.id === id);
    if (item) {
        item.count += 1; // Increment the quantity
    }},
    removeCartItemCount: (state, action) => {
      const id = action.payload;
      const item = state.cart.find(item => item.id === id);
      if(item.count <= 1){
        state.cart = state.cart.filter((item) => item.id !== id);
      }else{
        item.count -= 1 ;
      }
    },
  },
});

export const {
  setCartData,
  removeCartData,
  addCartItemCount,
  removeCartItemCount,
} = dataSlice.actions;
export default dataSlice.reducer;
