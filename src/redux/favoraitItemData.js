import { createSlice } from "@reduxjs/toolkit";

const favoraitDataSlice = createSlice({
  name: "favorait",
  initialState: {
    favoraitData: [],
  },
  reducers: {
    setFavoraitdata: (state, action) => {
      console.log(action.payload);
      if(state.favoraitData.length === 0){
        state.favoraitData.push(action.payload);
        return;
      }
      const isItem = state.favoraitData.some((item)=>item.id === action.payload.id);   //some() give boolean for checking item is available or not
      if(!isItem){
        state.favoraitData.push(action.payload);
      }
    },
    removeFavoraitData: (state, action) =>{
      const removeDataID = action.payload;
      state.favoraitData = state.favoraitData.filter((item) => item.id !== removeDataID);
    },
    // clear all data from favorait
    clearFavoraitData:(state,action)=>{
      state.favoraitData=action.payload
    }
  },
});

export const { setFavoraitdata, removeFavoraitData,clearFavoraitData } =
  favoraitDataSlice.actions;
export default favoraitDataSlice.reducer;
