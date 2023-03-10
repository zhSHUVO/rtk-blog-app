import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogPosts = ({ blog }) => {
    const { id, title, image, tags, createdAt } = blog;
    return (
        <div>
            <div className="card">
                <Link to={`/blogs/${id}`}>
                    <img src={image} className="card-image" alt={title} />
                </Link>
                <div className="p-4">
                    <Link
                        to={`/blogs/${id}`}
                        className="text-lg post-title lws-RelatedPostTitle"
                    >
                        {title}
                    </Link>
                    <div className="mb-0 tags">
                        <span>#{tags.join(", #")}</span>
                    </div>
                    <p>{createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default RelatedBlogPosts;
