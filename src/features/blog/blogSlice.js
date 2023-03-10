import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, updateLikeValue, updateSaveState } from "./blogApi";

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
    const blog = await getBlog(id);
    return blog;
});

export const updateLikes = createAsyncThunk(
    "blog/updateLikes",
    async ({ id, likes }) => {
        console.log(likes);
        const updatedLikes = await updateLikeValue(id, likes);
        return updatedLikes;
    }
);

export const updateSaved = createAsyncThunk(
    "blog/updateSaved",
    async ({ id, isSaved }) => {
        console.log(isSaved);
        const updatedSaved = await updateSaveState(id, isSaved);
        return updatedSaved;
    }
);

const blogSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(updateLikes.fulfilled, (state, action) => {
                state.blog.likes = action.payload.likes;
            })
            .addCase(updateSaved.fulfilled, (state, action) => {
                state.blog.isSaved = action.payload.isSaved;
            });
    },
});

export default blogSlice.reducer;
