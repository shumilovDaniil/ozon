import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import styled from "styled-components";
import { Container } from "./styles/style";

function App() {
    return (
        <>
            <Wrapper>
                <Header />
                <Content>
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/favorite" element={<Favorite />} />
                            <Route path="/product/:id" element={<Product />} />
                        </Routes>
                    </Container>
                </Content>
                <Footer />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div`
    flex: 1 1 auto;
`;

export default App;
