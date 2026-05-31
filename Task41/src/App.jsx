import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import WelcomeCard from './components/WelcomeCard';
import NewCustomers from './components/NewCustomers';
import PendingOrders from './components/PendingOrders';
import { metrics, orders, customers } from './data/mockData';
import './index.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      
      <div className="main-wrapper">
        <Header />
        
        <main className="dashboard-grid">
          {metrics.map(metric => (
            <MetricCard 
              key={metric.id} 
              title={metric.title} 
              value={metric.value} 
              color={metric.color} 
              iconName={metric.icon} 
            />
          ))}

          <WelcomeCard colSpan={2} />

          <PendingOrders orders={orders}  />

          <NewCustomers customers={customers} />

        </main>
      </div>
    </div>
  );
}

export default App;