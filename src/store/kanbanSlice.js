import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: [],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
    },

    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },

    updateColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
});

export const { setColumns, addColumn, updateColumns } =
  kanbanSlice.actions;

export default kanbanSlice.reducer;
