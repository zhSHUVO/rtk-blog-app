import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../../ui/Loading";
import BlogGridItems from "./BlogsGridItems";

const BlogGrid = () => {
    const dispatch = useDispatch();

    const { blogs, isLoading, isError, error } = useSelector(
        (state) => state.blogs
    );

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && blogs?.length === 0) {
        content = <div className="col-span-12">No blogs found!</div>;
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map((blog) => (
            <BlogGridItems key={blog.id} blog={blog} />
        ));
    }

    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    );
};

export default BlogGrid;
