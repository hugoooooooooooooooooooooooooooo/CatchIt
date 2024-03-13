import Registro from './componentes/Registro';
import {Routes, Route, Navigate} from "react-router-dom";
import Preguntas from './componentes/Preguntas';
import RepositorioAdmin from './componentes/RepositorioAdmin';
import Home from './componentes/Home';
import { LogIn } from "./componentes/LogIn";
import { IntroducirPreguntas } from "./componentes/IntroducirPreguntas";
import { UseUser } from './hooks/UseUser';

function App() {
  const {user} = UseUser();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn home="true"/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/bienvenida' element={ user ? <RepositorioAdmin /> : <Navigate to="/" />} />
        <Route path='/preguntas' element={user ? <Preguntas /> : <Navigate to="/" />} />
        <Route path="/createPregunta" element={user ? <IntroducirPreguntas /> : <Navigate to="/" />} />
        <Route path="/editPregunta/:preguntaId" element={user ? <IntroducirPreguntas /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}
export default App;

