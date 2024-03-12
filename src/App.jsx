import Registro from './componentes/Registro';
import {Routes, Route, Link} from "react-router-dom";
import Preguntas from './componentes/Preguntas';
import Bienvenida from './componentes/Bienvenida';
import Home from './componentes/Home';
import { LogIn } from "./componentes/LogIn";
import { IntroducirPreguntas } from "./componentes/IntroducirPreguntas";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn home="true"/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/bienvenida' element={<Bienvenida/>} />
        <Route path='/preguntas' element={<Preguntas/>} />
        <Route path="/createPregunta" element={<IntroducirPreguntas />} />
      </Routes>
    </div>
  );
}
export default App;

