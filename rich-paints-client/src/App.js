import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utilities/ScroolToTop";
import PaintingTipsPage from "./screens/PaintingTipsPage";
import Navbar from "./components/header/Navbar";
import InteriorDesignSection from "./screens/InteriorDesignSection";
import ExteriorDesignSection from "./screens/ExteriorDesignSection";
import Paints from "./screens/Paints";
import Projects from "./screens/Projects";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/our-paints' element={<Paints />} />
        <Route path='/our-projects' element={<Projects />} />
        <Route path='/interior-design' element={<InteriorDesignSection />} />
        <Route path='/exterior-design' element={<ExteriorDesignSection />} />
        <Route path='/painting-tips' element={<PaintingTipsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
