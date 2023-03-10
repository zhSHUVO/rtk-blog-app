import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../../ui/Loading";
import RelatedBlogPosts from "./RelatedBlogPosts";

const RelatedBlog = ({ tags, id }) => {
    const dispatch = useDispatch();
    const { relatedBlogs, isLoading, isError, error } = useSelector(
        (state) => state.relatedBlogs
    );
    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags, id }));
    }, [id, dispatch, tags]);

    let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && relatedBlogs?.length === 0)
    content = <div>No Related Blog Found</div>;
  if (!isLoading && !isError && relatedBlogs?.length > 0)
    content = relatedBlogs.map((blog) => (
      <RelatedBlogPosts key={blog.id} blog={blog} />
    ));

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
                Related Posts
            </h4>
            <div className="space-y-4 related-post-container">
                {content}
            </div>
        </aside>
    );
};

export default RelatedBlog;
