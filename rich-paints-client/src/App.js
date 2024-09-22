import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/footer/Footer";
import PaintingTipsPage from "./screens/PaintingTipsPage";
import Navbar from "./components/header/Navbar";
import InteriorDesignSection from "./screens/InteriorDesignSection";
import ExteriorDesignSection from "./screens/ExteriorDesignSection";
import Paints from "./screens/Paints";
import Projects from "./screens/Projects";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./utilities/ScroolToTop";

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLinkClick = (path, hash) => {
    if (path === location.pathname) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path + hash);
    }
  };

  return (
    <>
      <Navbar handleScrollLinkClick={handleScrollLinkClick} />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/our-paints' element={<Paints />} />
        <Route path='/our-projects' element={<Projects />} />
        <Route path='/interior-design' element={<InteriorDesignSection />} />
        <Route path='/exterior-design' element={<ExteriorDesignSection />} />
        <Route path='/painting-tips' element={<PaintingTipsPage />} />
      </Routes>
      <Footer handleScrollLinkClick={handleScrollLinkClick} />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
