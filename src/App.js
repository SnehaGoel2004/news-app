// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/NewsList";
import './App.css'; // Import the CSS file

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<News />} />
                
                {/* You can add more routes for different categories here */}
                {/* Example: <Route path="/technology" element={<Technology />} /> */}
            </Routes>
        </Router>
    );
}

export default App;