import React from "react";
import { Link } from "react-router-dom";
import git from "../images/git.webp";

const RelatedPost = () => {
    return (
        <div>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
                Related Posts
            </h4>
            <div className="space-y-4 related-post-container">
                <div className="card">
                    <Link to={`/posts/2`}>
                        <img src={git} className="card-image" alt="" />
                    </Link>
                    <div className="p-4">
                        <Link
                            to={`/posts/2`}
                            className="text-lg post-title lws-RelatedPostTitle"
                        >
                            Top Github Alternatives
                        </Link>
                        <div className="mb-0 tags">
                            <span>#python,</span> <span>#tech,</span>{" "}
                            <span>#git</span>
                        </div>
                        <p>2010-03-27</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedPost;
