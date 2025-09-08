import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup"; // ✅ import đúng

function App() {
  const [showLogin, setShowLogin] = useState(false); // ✅ sửa lại đồng bộ tên

  return (
    <div>
      {/* Hiển thị popup khi showLogin = true */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}

      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
