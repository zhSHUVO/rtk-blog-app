import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/blogs/:blogId" element={<Blog />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
