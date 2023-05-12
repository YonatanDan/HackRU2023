import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles/styles.css';

import CampaignForm from './pages/CampaignForm.js';
import Layout from "./pages/Layout.jsx";
import Population from "./pages/Population.jsx";
import Response from "./pages/Response.jsx";

function App() {
  const populations = [
    {
      name: 'Jewish Americans',
      start: '2021-01-01',
      end: '2021-01-31',
      platforms: ['Facebook', 'Instagram', 'Twitter'],
      percentage: '10%',
      post: "🌟 Experience Jewish Hospitality at Radisson Hotel!🌟\n Escape to a memorable stay tailored for American Jews!\n Discover a home away from home where luxury meets tradition.\n Immerse yourself in our elegant accommodations, kosher dining options, and explore local Jewish heritage. Book your unforgettable stay today and share your #JewishLuxuryExperience with us! #JewishHospitality #LuxuryGetaway #KosherDining #ExploreHeritage",
      mtk: "American Jews form the largest Jewish community outside of Israel, with approximately 5.7 million people. They have a rich history of immigration, settling in the United States since colonial times and contributing to the nation's cultural, economic, and intellectual development. American Jews encompass diverse religious affiliations, including Orthodox, Conservative, Reform, and Reconstructionist Judaism, as well as secular and cultural identities. They have made significant contributions to various fields and have been actively engaged in social and political causes. The Holocaust has had a profound impact on Jewish identity, and support for Israel remains an important aspect for many American Jews. They have established numerous communal institutions and face ongoing challenges, including anti-Semitism."
    },
    {
      name: 'Druze',
      start: '2021-01-01',
      end: '2021-01-31',
      platforms: ['Facebook'],
      percentage: '23%',
      post: "🔵🔵🔵 Exciting News for the Druze Community! 🔵🔵🔵 🎉🎉 Introducing Druze Insurance - Protection for Our Unique Community! 🎉🎉 Dear fellow Druze friends, We are thrilled to announce the launch of Druze Insurance, a groundbreaking insurance service tailored specifically to meet the needs of our cherished community. 🌟 At Druze Insurance, we understand the importance of safeguarding what matters",
      mtk: "druze info"
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CampaignForm />} />
          <Route path="response" element={<Response  />} />
          <Route
              path={"population"}
              element={<Population />}
          />
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
