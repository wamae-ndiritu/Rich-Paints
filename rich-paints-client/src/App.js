import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import Header from "./components/header/Header";
import ProductPage from "./screens/ProductPage";
import Footer from "./components/footer/Footer";
import ContactsPage from "./screens/ContactsPage";
import ServicePage from "./screens/ServicePage";
import AboutPage from "./screens/AboutPage";
import ScrollToTop from "./utilities/ScroolToTop";
import PaintingTipsPage from "./screens/PaintingTipsPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/painting-tips" element={<PaintingTipsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
