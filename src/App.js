import './App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Create from './components/Create.js';
import Login from './components/Login.js';

function App() {
  return (
    <Router>
    <div className="main">
      <h2 className="main-header">Forma Livre 3D</h2>
      <div>
      <Button type='submit' onClick={Create}>Cadastre-se</Button>
      <Button type='submit' onClick={Login}>Entrar</Button>
      </div>
      <div>
          <Route exact path='/create' component={Create} />
        </div>
    </div>
    </Router>
  );
}

export default App;
