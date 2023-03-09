import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/posts/:postId" element={<Post />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
