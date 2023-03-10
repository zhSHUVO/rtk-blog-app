const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sort: "default",
    filter: "all",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        sortBy: (state, action) => {
            state.sort = action.payload;
        },
        selectedFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export default filterSlice.reducer;

export const { sortBy, selectedFilter } = filterSlice.actions;
