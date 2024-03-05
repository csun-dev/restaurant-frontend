import "./css/reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Join from "./pages/Join";
import SignIn from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/create" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
