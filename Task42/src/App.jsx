import React from 'react';
import HeaderInfo from './components/HeaderInfo';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <div className="container">
      <HeaderInfo />
      <ContactForm />
    </div>
  );
}

export default App;