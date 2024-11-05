import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.test'; // Adjust the path as necessary
import About from './pages/About/About'; // Adjust the path as necessary
import Gallery from './pages/gallery/Gallery.test'; // Adjust the path as necessary
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/backtothetop/BackToTopButton';
import NotFound from './pages/NotFound/NotFound'; // Optional: Create a NotFound component

const AppRoutes = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/gallery']; // Ensure the paths are consistent

  return (
    <>
      <BackToTopButton />
      <Navbar />

      <Routes>
        {/* Redirect the root path to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {!noNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
