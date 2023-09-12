import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  username: string;
  password: string;
}

const initialState: AuthState = {
  username: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
