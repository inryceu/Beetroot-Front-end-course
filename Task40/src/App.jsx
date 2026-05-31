import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainClassName = `main-content${isHomePage ? '' : ' main-content--single'}`;

  return (
    <div className="app-container">
      <Header />
      <Banner />
      
      <main className={mainClassName}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
