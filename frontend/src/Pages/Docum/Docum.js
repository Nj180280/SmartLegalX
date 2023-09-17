import React, { useState } from 'react';
import WillForm from './WillForm.jsx';
import AntiRagging from './AntiRagging.js';

function App() {
  const [selectedForm, setSelectedForm] = useState('form1'); // Initialize with the default form to show

  const handleDropdownChange = (e) => {
    setSelectedForm(e.target.value);
  };

  return (
    <div className='container'>
      <h2 className='tex'>Select a Form</h2>
      <select value={selectedForm} onChange={handleDropdownChange} style={{height:'3rem', backgroundColor:'wheat', textDecoration:'underline'}}>
        <option value="form1">Will Form</option>
        <option value="form2">Anti Ragging</option>
      </select>

      {selectedForm === 'form1' && <WillForm />}
      {selectedForm === 'form2' && <AntiRagging />}
    </div>
  );
}

export default App;
