import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/contact-book/contacts" element={<Contacts />} />
        <Route path="/contact-book/about" element={<About />} />
        <Route path="/contact-book" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
