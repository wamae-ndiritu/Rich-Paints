import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import Header from "./components/header/Header";
import ProductPage from "./screens/ProductPage";
import Footer from "./components/footer/Footer";
import ContactsPage from "./screens/ContactsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
