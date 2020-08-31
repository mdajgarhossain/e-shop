import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Help from "./components/Help/Help";
import Products from "./components/Products/Products";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Newsletter from "./components/Newsletter/Newsletter";
import MoreProducts from "./components/MoreProducts/MoreProducts";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Banner />
            <FeaturedProducts />
            <Newsletter />
            <MoreProducts />
            <Footer />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>
          <Route path="/shop">
            <Navbar />
            <Shop />
            <Footer />
          </Route>
          <Route path="/help">
            <Navbar />
            <Help />
            <Footer />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
