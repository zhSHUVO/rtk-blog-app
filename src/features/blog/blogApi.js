import axios from "../../utils/axios";

export const getBlog = async (id) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
};

export const updateLikeValue = async (id, updates) => {
    const response = await axios.patch(`/blogs/${id}`, { likes: updates });
    return response.data;
};

export const updateSaveState = async (id, updates) => {
    const response = await axios.patch(`/blogs/${id}`, { isSaved: updates });
    return response.data;
};
