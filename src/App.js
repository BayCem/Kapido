import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './assets/css/app.min.css';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Content from './components/ContentComponent/Content';

import Home from './routes/Home';
import Start from './routes/Start';

const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/basla" render={Start} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
