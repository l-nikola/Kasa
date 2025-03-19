import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Housing from "./pages/Housing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
