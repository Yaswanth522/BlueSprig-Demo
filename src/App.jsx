import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <ChatWidget />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
