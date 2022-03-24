import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Activities from "./components/Activities";
import Contact from "./components/Contact";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
