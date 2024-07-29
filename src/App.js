import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFounPage from "./pages/NotFounPage";
import Header from "./components/Header";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFounPage />} />
      </Routes>
    </div>
  );
}

export default App;
