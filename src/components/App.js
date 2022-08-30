import Signup from "./Signup";
import Navbar from "../vmart/Navbar";
import Footer from "../vmart/Footer";
import HeroSlider from "../vmart/HeroSlider";
import Products from "../vmart/Products";
import Product from "../vmart/Product";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Mailer from "./Mailer/Mailer";
import Aboutus from "./About/Aboutus";
import Cart from "../vmart/Cart";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="bg-color">
      <Navbar />
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HeroSlider />} />

              <Route path="/products" element={<Products />} />

              <Route path="/products/:id" element={<Product />} />

              <Route path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } />

              <Route path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                } />

              <Route path="/cart" element={<Cart />} />

              <Route path="/signup" element={<Signup />} />

              <Route path="/login" element={<Login />} />

              <Route path="/contact" element={<Mailer />} />

              <Route path="/about" element={<Aboutus />} />

              <Route path="/forgot-password" element={<ForgotPassword />} />

            </Routes>
          </AuthProvider>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;