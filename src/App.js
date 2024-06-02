import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Blog from "./pages/blog";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Auth from "./pages/auth";
import Privacy from "./pages/privacy";
import CGV from "./pages/cgv";
import AboutUs from "./pages/aboutus";
import Donation from "./pages/donation";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import { UserProvider } from "./userRole";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/*" element={<CatchAllRoute />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

const CatchAllRoute = () => {
  const location = window.location.pathname;
  if (location.includes("/login")) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/" />;
};

export default App;
