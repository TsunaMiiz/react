import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Products from './components/products' ;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" exact={true}>
            <About />
          </Route>
          <Route path="/products" exact={true}>
            <Products />
          </Route>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
