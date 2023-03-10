import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BlogDetails from "../components/Blog/BlogDetails";
import RelatedBlog from "../components/RelatedBlog/RelatedBlog";
import { fetchBlog } from "../features/blog/blogSlice";
import Loading from "../ui/Loading";

const Blog = () => {
    const dispatch = useDispatch();
    const { blogId } = useParams();

    const { blog, isLoading, isError, error } = useSelector(
        (state) => state.blog
    );

    useEffect(() => {
        dispatch(fetchBlog(blogId));
    }, [dispatch, blogId]);

    let content = null;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && !blog?.id) content = <div>No Blog Found</div>;
    if (!isLoading && !isError && blog?.id)
        content = (
            <section className="post-page-container">
                <BlogDetails blog={blog} />
            </section>
        );

    return (
        <div>
            <div className="container mt-8">
                <Link
                    to={"/"}
                    className="inline-block text-gray-600 home-btn"
                    id="lws-goHome"
                >
                    <i className="mr-2 fa-solid fa-house"></i>Go Home
                </Link>
            </div>
            <section class="post-page-container">
                {content}
                <RelatedBlog />
            </section>
        </div>
    );
};

export default Blog;
