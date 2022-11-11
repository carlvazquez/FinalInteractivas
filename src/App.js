import './App.css';
import Listar from './Componentes/Listar';
import Login from './Componentes/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      

      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>

          <Route path="Listar" element={<Listar/>}/>
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
