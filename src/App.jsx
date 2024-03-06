import {HeaderInicio} from './components/HeaderInicio.jsx'
import {ToGame} from './components/ToGame.jsx'
import {Rules} from './components/Rules.jsx'
import {LogIn} from './components/LogIn.jsx'

function App() {
  return (
    <>
      <HeaderInicio />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <ToGame />
        </div>
        <div className="snap-center">
          <Rules />
        </div>
        <div className="snap-center">
          <LogIn />
        </div>
      </main>
    </>
  )
}

export default App
