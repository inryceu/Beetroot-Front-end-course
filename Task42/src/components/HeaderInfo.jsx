import React from 'react';

export default function HeaderInfo() {
  return (
    <div className="header-section">
      <div className="header-text">
        <h1>Зв'язатися з<br/>нами</h1>
        <p>Залиш нам повідомлення, а ми відповімо якнайшвидше</p>
      </div>
      <div style={{ width: '300px', height: '200px', backgroundColor: '#ffd770', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="contact-us.jpg" alt="Contact Us" style={{ width: '150px', height: '150px' }} />
      </div>
    </div>
  );
}