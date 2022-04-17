
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard'
import { Login } from './Components/Login'
import { SignUp } from './Components/Signup'
import { PrivateRoute } from './Routes/PrivateRoute'
import { useSelector } from 'react-redux'
import Form from './Components/Form'
import { Classes } from './Components/dash1'



function App() {

  const {isAuthenticated}=useSelector((state)=>state.login)
  return (
    <div className="App">
      
      <Routes>
      <Route path='/teachers/dash1' element={<Classes/>} />
      <Route path='/form' element={<Form/>} />
        <Route path='/dashboard' element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
                <Dashboard/>
        </PrivateRoute>} />
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
      </Routes>
    </div>
  )
}

export default App
