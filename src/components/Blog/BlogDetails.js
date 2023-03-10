import React from "react";
import { useDispatch } from "react-redux";
import { updateLikes, updateSaved } from "../../features/blog/blogSlice";

const BlogDetails = ({ blog }) => {
    const dispatch = useDispatch();

    const { id, image, title, tags, likes, isSaved, description } = blog;
    console.log(isSaved);

    return (
        <main className="post">
            <img
                src={image}
                alt={title}
                className="w-full rounded-md"
                id="lws-megaThumb"
            />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    <span>#{tags.join(", #")}</span>
                </div>
                <div className="btn-group">
                    <button
                        className="like-btn"
                        id="lws-singleLinks"
                        onClick={() => {
                            dispatch(
                                updateLikes({
                                    id,
                                    likes: likes + 1,
                                })
                            );
                        }}
                    >
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>

                    <button
                        className={`save-btn ${isSaved && "active"}`}
                        id="lws-singleSavedBtn"
                        onClick={() => {
                            dispatch(
                                updateSaved({
                                    id,
                                    isSaved: !isSaved,
                                })
                            );
                        }}
                    >
                        <i className="fa-regular fa-bookmark"></i> Saved
                    </button>
                </div>
                <div className="mt-6">
                    <p>{description}</p>
                </div>
            </div>
        </main>
    );
};

export default BlogDetails;
