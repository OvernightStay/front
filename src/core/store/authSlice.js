import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Моковые данные для регистрации
const mockRegister = async userData => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { message: 'Registration successful' } });
    }, 1000);
  });
};

// Моковые данные для авторизации
const mockLogin = async userData => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { token: 'mock-token' } });
    }, 1000);
  });
};

// Асинхронные действия
export const registerUser = createAsyncThunk(
  'auth/register',
  async userData => {
    const response = await mockRegister(userData);
    return response.data;
  },
);

export const loginUser = createAsyncThunk('auth/login', async userData => {
  const response = await mockLogin(userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
