import "./index.css";
import NavBar from "./NarBar";
import Home from "./Home";
import Footer from "./Footer";
import PlaceToStay from "./PlaceToStay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
