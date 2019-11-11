import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import User from './components/User';

// / => HomeComponent
// /about => AboutComponent
// /sfadsf => Error404Component

const LazySettings = React.lazy(function() {
  // need to return Promise
  // Promise<SettingsComponent>
  // {Settings: '', }
  // return import('./components/Settings').then((module) => {
  //   return module.Settings
  // });

  return import('./components/Settings');
})

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/yariv-katz">ME!</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Suspense fallback={<h1>loading</h1>}>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} exact />
            <Route path="/user/:name" component={User} exact />
            <Route path="/user/:name/:age" component={User} />
            <Route path="/settings" component={LazySettings} />
            <Route path="**" component={Error404} />
          </Switch>
        </Suspense>
        
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
