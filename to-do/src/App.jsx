
import './App.css'
import {Routes , Route} from "react-router-dom"
import {Country} from "./components/Country"
 import{City} from "./components/City"
 import {User} from "./components/users"

function App() {
  

  return (
    <div className="App">
     <Routes>
       <Route path='/add-country' element={<Country/>}></Route>
       <Route path='/add-city' element={<City/>}></Route>
       <Route path='/users' element={<User/>}></Route>
     
      
     </Routes>
    </div>
  )
}

export default App
