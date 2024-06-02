
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: null
  },
  reducers: {
    userData: (state , action) => {
      state.value = action.payload;
    }
  }
});

// Export the reducer and actions
export const { userData } = userSlice.actions;
export default userSlice.reducer;
