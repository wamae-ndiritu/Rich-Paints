import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductPage from "./screens/ProductPage";
import Footer from "./components/footer/Footer";
import ContactsPage from "./screens/ContactsPage";
import ServicePage from "./screens/ServicePage";
import AboutPage from "./screens/AboutPage";
import ScrollToTop from "./utilities/ScroolToTop";
import PaintingTipsPage from "./screens/PaintingTipsPage";
import Navbar from "./components/header/Navbar";
import InteriorDesignSection from "./screens/InteriorDesignSection";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/interior-design' element={<InteriorDesignSection />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/painting-tips' element={<PaintingTipsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
