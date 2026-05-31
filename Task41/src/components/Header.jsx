import React from 'react';
import { Menu, RefreshCw, User } from 'lucide-react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Menu size={24} style={{ cursor: 'pointer' }} />
      </div>
      <h1 style={styles.title}>~POSTERS GALORE~</h1>
      <div style={styles.right}>
        <RefreshCw size={20} style={{ cursor: 'pointer', marginRight: '20px' }} />
        <User size={20} style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#3f51b5',
    color: 'white',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    flexShrink: 0
  },
  title: { fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' },
  left: { display: 'flex', alignItems: 'center' },
  right: { display: 'flex', alignItems: 'center' }
};