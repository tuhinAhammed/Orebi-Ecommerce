import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'counter',
  initialState : {
    value : localStorage.getItem("cartStorage") ? JSON.parse(localStorage.getItem("cartStorage")) : []
    
  },
  reducers: {
    cartTotal: (state ,action) => {
    const findData = state.value.findIndex((item) => item._id == action.payload._id)
    if(findData){
      state?.value?.push(action.payload)
    }
    else{
      console.log("cart is already exist");
    }
    },

  },
})

// Action creators are generated for each case reducer function
export const { cartTotal } = CartSlice.actions

export default CartSlice.reducer