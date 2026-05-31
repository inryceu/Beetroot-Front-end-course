import React from 'react';
import { Home, Code } from 'lucide-react';

const WelcomeCard = ({ colSpan = 1 }) => (
  <div className={`card ${colSpan === 2 ? 'col-span-2' : 'col-span-1'}`} style={{ maxHeight: '450px', overflowY: 'auto' }}>
      <img 
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
        alt="Welcome" 
        style={styles.image} 
      />
      <div style={styles.content}>
        <h2>Welcome to react-admin demo</h2>
        <p style={styles.text}>This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.</p>
        <div style={styles.actions}>
          <button style={styles.btn}><Home size={16} style={{marginRight: '8px'}}/> REACT-ADMIN SITE</button>
          <button style={styles.btn}><Code size={16} style={{marginRight: '8px'}}/> SOURCE FOR THIS DEMO</button>
        </div>
      </div>
    </div>
  );

const styles = {
  image: { width: '100%', height: '250px', objectFit: 'cover' },
  content: { padding: '20px' },
  text: { color: '#666', marginTop: '10px', marginBottom: '20px', lineHeight: '1.5' },
  actions: { display: 'flex', gap: '20px' },
  btn: { display: 'flex', alignItems: 'center', padding: '10px 15px', border: 'none', background: 'transparent', cursor: 'pointer', fontWeight: 'bold', color: '#333' }
};

export default WelcomeCard;