import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./pages/events";
import Community from "./pages/community";
import Reviews from './pages/reviews';
import Account from './pages/account'
import Home from "./pages/home";
import Menu from "./pages/Menu";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
