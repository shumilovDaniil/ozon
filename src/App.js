import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { Container } from "./styles/style";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

