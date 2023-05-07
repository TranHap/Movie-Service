// import Button  from './Button';
// import styles from './App.module.css';
// import Movies from "./components/Movies";
// import { useState, useEffect } from "react";
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/movie/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
