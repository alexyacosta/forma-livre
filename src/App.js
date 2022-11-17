import './App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

import Create from './components/Create.js';
import Login from './components/Login.js';

function App() {
  const history = useHistory();

  return (
    <div className="main">
      <h2 className="main-header">Forma Livre 3D</h2>
      <div>
      <Button onClick={()=> history.push('./components/Create.js')}>Click me!</Button>
      <Button type='submit' onClick={Create}>Cadastre-se</Button>
      <Button type='submit' onClick={Login}>Entrar</Button>
      </div>
    </div>
  );
}

export default App;
