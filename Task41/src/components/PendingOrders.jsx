import React from 'react';
import OrderCard from './OrderCard';

const PendingOrders = ({ orders, colSpan = 1 }) => (
  <div className={`card ${colSpan === 2 ? 'col-span-2' : 'col-span-1'}`} style={{ maxHeight: '450px', overflowY: 'auto', padding: '20px' }}>
    {orders.map((order) => (
      <OrderCard key={order.id} order={order} />
    ))}
  </div>);

export default PendingOrders;
