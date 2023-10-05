import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/HomePage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./pages/CategoryPage/Category";
import Cart from "./pages/CartPage/Cart";
import Footer from "./Components/Footer/Footer";
import store from "./Store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
