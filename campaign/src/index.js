import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles/styles.css';

import CampaignForm from './pages/CampaignForm.js';
import Home from "./pages/Home.js";
import Layout from "./pages/Layout.jsx";
import Population from "./pages/Population.jsx";
import Response from "./pages/Response.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="campaignForm" element={<CampaignForm />} />
          <Route path="response" element={<Response />} />
          <Route path="population" element={<Population />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();