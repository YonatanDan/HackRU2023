import React from 'react';
import CampaignForm from './CampaignForm';

function App() {
  return (
    <div>
      <h1 style={{ backgroundColor: '#7423D2', color: '#FFFFFF', padding: '1rem', margin: '0', borderBottom: '1px solid #FFFFFF'}}>Campaign Manager Form</h1>
      <div className='content-container'>
        <CampaignForm />
      </div>
    </div>
  );
}

export default App;