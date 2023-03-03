import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const API_URL = 'http://127.0.0.1:8000/api/random_greeting';

// Action Thunk
export const fetchGreeting = createAsyncThunk('fetchMessages', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

// Reducers
const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      fetchGreeting.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default messagesSlice.reducer;
