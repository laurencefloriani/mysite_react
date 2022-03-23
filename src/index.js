import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Projects from "./components/Projects";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
