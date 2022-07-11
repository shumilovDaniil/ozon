import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Container, GlobalStyle } from "./styles/style";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Container>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </Container>
  </BrowserRouter>
);
