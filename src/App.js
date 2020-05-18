import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import History from './components/History';
import Details from './components/Details';

function App() {
  return (
    <>
      <Router history={History}>
        <div className='bg-dark text-light pt-5' style={{ height: '100vh' }}>
          <div className='container'>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/search' component={Search} />
              <Route path='/details/:language' component={Details} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
