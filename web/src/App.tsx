import './styles/global.css';
import { Habit } from "./components/Habit"


function App() {
  return (
    <div>
        <Habit completed={3}/>
    </div>
  )
}

export default App
 

//componente: reaproveitar / isolar
// propriedade: uma informação enviada para modificar um componente visual ou comportamental