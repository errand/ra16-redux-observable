import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skills: [],
    error: '',
    loading: 'idle'
  },
  reducers: {
    skillsLoading: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    skillsReceived: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.skills = action.payload
      }
    },
    skillsError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.goodToGo = false
        state.error = action.payload
      }
    }
  }
});

export const { skillsLoading, skillsReceived, skillsError } = skillsSlice.actions;

export default skillsSlice.reducer;
