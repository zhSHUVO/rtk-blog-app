import React from "react";

const BlogDetails = ({ blog }) => {
    const { image, title, tags, likes, isSaved, description } = blog;
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
                    <button className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>

                    {isSaved ? (
                        <button
                            className="active save-btn"
                            id="lws-singleSavedBtn"
                        >
                            <i className="fa-regular fa-bookmark"></i> Saved
                        </button>
                    ) : (
                        <button className="save-btn" id="lws-singleSavedBtn">
                            <i className="fa-regular fa-bookmark"></i> Save
                        </button>
                    )}
                </div>
                <div className="mt-6">
                    <p>{description}</p>
                </div>
            </div>
        </main>
    );
};

export default BlogDetails;
