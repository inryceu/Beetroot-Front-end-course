import React from 'react';

const NewCustomers = ({ customers, colSpan = 1 }) => (
  <div className={`card ${colSpan === 2 ? 'col-span-2' : 'col-span-1'}`} style={{ maxHeight: '450px', overflowY: 'auto', padding: '20px' }}>
      {customers.map(c => (
        <div key={c.id} style={styles.item}>
          <img src={c.avatar} alt={c.name} style={styles.avatar} />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  );

const styles = {
  item: { display: 'flex', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #eee' },
  avatar: { width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }
};

export default NewCustomers;