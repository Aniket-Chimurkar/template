import './App.css'
import {Routes , Route} from "react-router-dom"
import { Home } from './Pages/home'
import { One } from './Pages/one'
import { Two } from './Pages/two'
import { User } from './Pages/Users'

function App() {
 
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/registration/one' element={<One/>}></Route>
       <Route path='/registration/two' element={<Two/>}></Route>
       <Route path='/user' element={<User/>}></Route>
     </Routes>
    </div>
  )
}

export default App
