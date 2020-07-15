import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./cart-context";
import {
  Header,
  Home,
  ProductDetail,
  Cart,
  Confirmation,
  Products,
  About,
  NotFound
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:productDetailId">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
