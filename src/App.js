// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css'; // Import the CSS file
import NewsList from "./components/NewsList";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<NewsList />} />
                <Route path="/news" element={<NewsList />} />
                
                {/* You can add more routes for different categories here */}
                {/* Example: <Route path="/technology" element={<Technology />} /> */}
            </Routes>
        </Router>
    );
}

export default App;