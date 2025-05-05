// Import required React hooks
import { useState, useEffect } from 'react';
// Import styles
import './styles/App.css';
// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import About from './components/About';
import Register from './components/Register';

function App() {
  // State to track current route path
  const [path, setPath] = useState(document.location.pathname || '/');

  // Handle client-side navigation
  function changePath(e) {
    e.preventDefault();
    window.history.pushState(null, '', e.target.pathname);
    setPath(() => e.target.pathname);
  }

  // Add browser history listener
  useEffect(() => {
    const pathname = document.location.pathname;
    // Set initial path based on current URL
    if (pathname === '/chinese-zodiac/') {
      setPath('/');
    } else {
      setPath(pathname);
    }
    // Update path when browser back/forward buttons are used
    const handlePageChange = () => setPath(document.location.pathname);
    window.addEventListener('popstate', handlePageChange);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('popstate', handlePageChange);
  }, []);

  return (
    <>
      <Header changePath={changePath} />
      <main id="main-content">
        {/* Render components based on current path */}
        {path === '/' && <Index />}
        {path === '/about' && <About />}
        {path === '/register' && <Register />}
      </main>
      <Footer />
    </>
  );
}

export default App;
