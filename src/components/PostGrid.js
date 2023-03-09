import React from "react";
import { Link } from "react-router-dom";
import git from "../images/git.webp";

const PostGrid = () => {
    return (
        <div className="lws-card">
            <Link to={`/posts/1`}>
                <img
                    src={git}
                    className="lws-card-image"
                    alt="Top Github Alternatives"
                />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">2023-05-01</p>
                    <p className="lws-likeCount">
                        <i className="fa-regular fa-thumbs-up"></i>
                        100
                    </p>
                </div>
                <Link to={`/posts/1`} className="lws-postTitle">
                    {" "}
                    Top Github Alternatives{" "}
                </Link>
                <div className="lws-tags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> Saved </span>
                </div>
            </div>
        </div>
    );
};

export default PostGrid;
