import React from 'react';
import './reset.css';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Auth from './Components/Auth';
import Nav from './Components/Nav';
import routes from './routes';


function App() {
  return (
      <HashRouter>
        <div className="App">
            <Nav/>
            {routes} 

        </div>

      </HashRouter>
  );
}

export default App;
