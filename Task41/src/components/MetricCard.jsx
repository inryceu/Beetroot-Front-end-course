import React from 'react';
import { DollarSign, ShoppingCart, MessageSquare, UserPlus } from 'lucide-react';

const iconMap = { DollarSign, ShoppingCart, MessageSquare, UserPlus };

export default function MetricCard({ title, value, color, iconName }) {
  const IconComponent = iconMap[iconName];

  return (
    <div className="card col-span-1" style={styles.card}>
      <div style={{...styles.iconBox, backgroundColor: color}}>
        <IconComponent size={40} color="white" />
      </div>
      <div style={styles.info}>
        <div style={styles.title}>{title}</div>
        <div style={styles.value}>{value}</div>
      </div>
    </div>
  );
}

const styles = {
  card: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  iconBox: { width: '40%', padding: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  info: { width: '60%', padding: '20px', textAlign: 'right' },
  title: { fontSize: '12px', color: '#888', textTransform: 'uppercase', marginBottom: '5px' },
  value: { fontSize: '24px', fontWeight: 'bold' }
};