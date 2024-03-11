import {Routes, Route, Link} from "react-router-dom";
import { Home } from './components/Home.jsx';
import { LogIn } from "./components/LogIn.jsx";
import { Registro } from "./components/Registro.jsx";
import { RepositorioPartidas } from "./components/RepositorioPartidas.jsx";
import { CrearPartida } from "./components/CrearPartida.jsx";
import { IntroducirPreguntas } from "./components/IntroducirPreguntas.jsx";
import { VerPreguntas } from "./components/VerPreguntas.jsx";





function App() {
  const ponerLogo = true;

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
      <Route path="/login" element={<LogIn home={ponerLogo}/>} />
      <Route path="/registro" element={<Registro/>} />
      <Route path="/repositorio" element={<RepositorioPartidas/>} />
      <Route path="/crearpartida" element={<CrearPartida/>} />
      <Route path="/introducirpreguntas" element={<IntroducirPreguntas/>} />
      <Route path="/verpreguntas" element={<VerPreguntas/>} />
    </Routes>
  )
}

export default App
