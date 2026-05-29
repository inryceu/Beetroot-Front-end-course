import React, { useState } from 'react';
import { LayoutDashboard, DollarSign, Image, Users, MessageSquare } from 'lucide-react';

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Sales', icon: <DollarSign size={20} /> },
    { name: 'Catalog', icon: <Image size={20} /> },
    { name: 'Customers', icon: <Users size={20} /> },
    { name: 'Reviews', icon: <MessageSquare size={20} /> }
  ];

  return (
    <aside style={styles.sidebar}>
      <nav style={styles.nav}>
        {menuItems.map(item => (
          <div 
            key={item.name} 
            style={{...styles.item, backgroundColor: active === item.name ? '#f0f0f0' : 'transparent'}}
            onClick={() => setActive(item.name)}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span style={{ fontWeight: active === item.name ? 'bold' : 'normal' }}>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: { width: '250px', backgroundColor: 'white', borderRight: '1px solid #ddd', paddingTop: '20px' },
  nav: { display: 'flex', flexDirection: 'column' },
  item: { display: 'flex', alignItems: 'center', padding: '15px 20px', cursor: 'pointer', color: '#555' },
  icon: { marginRight: '15px' }
};