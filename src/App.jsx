import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import AboutAbaTherapy from "./pages/AboutAbaTherapy";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ChatWidget />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-aba-therapy" element={<AboutAbaTherapy />} />
      </Routes>
      <Footer />
    </>
  );
}
