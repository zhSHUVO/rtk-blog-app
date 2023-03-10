import React from "react";
import BlogGrid from "../components/Blogs/BlogsGrid";
import Sidebar from "../components/Sidebar";

const Main = () => {
    return (
        <div>
            <section className="wrapper">
                <Sidebar />

                <BlogGrid />
            </section>
        </div>
    );
};

export default Main;
