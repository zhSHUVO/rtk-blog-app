import React from "react";
import PostGrid from "../components/PostGrid";
import Sidebar from "../components/Sidebar";

const Main = () => {
    return (
        <div>
            <section className="wrapper">
                <aside>
                    <Sidebar />
                </aside>
                <main className="post-container" id="lws-postContainer">
                    {" "}
                    <PostGrid />
                </main>
            </section>
        </div>
    );
};

export default Main;
