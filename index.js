import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter,Route, Router,Switch} from 'react-router-dom';
import Header from './components/common/Header';
import ProductList from './components/ProductList';
import configureStore from './components/redux/configureStore';
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <ReduxProvider store={store}>
      <div className="container-fluid">     
      <BrowserRouter>
      <Header />
     <Switch>
        <Route exact path="/" component={HomePage} />
         <Route path="/products" component={ProductList} />
        <Route path="/about" component={AboutPage} />
      </Switch>
       </BrowserRouter>
      </div>
      </ReduxProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
