import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BlogSection from './components/BlogSection';
import NewsSection from './components/NewsSection';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      
      <main className="main-content">
        <BlogSection />
        <NewsSection />
      </main>
    </div>
  );
}

export default App;