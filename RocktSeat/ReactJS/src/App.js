import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/main';
import './styles.css';
import Product from './pages/product';
// import Routes from './routes';

const App = () => ( 
    <div className="App">
      <Header/>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/product/:id" component={Product}/>
          </Switch>
      </BrowserRouter>
    </div>
)

export default App;
