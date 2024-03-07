import Form from "./componentes/Form";
import Registro from './componentes/Registro';
import {Routes, Route, Link} from "react-router-dom";
import Preguntas from './componentes/Preguntas';
import Bienvenida from './componentes/Bienvenida';
import Home from './componentes/Home';
import { LogIn } from "./componentes/LogIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/bienvenida/:id' element={<Bienvenida/>} />
        <Route path='/preguntas' element={<Preguntas/>} />
      </Routes>
    </div>
  );
}
export default App;

