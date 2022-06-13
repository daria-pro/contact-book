import { ToastBody } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import EditContactForm from "./components/EditContactForm/EditContactForm";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <ToastContainer />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
