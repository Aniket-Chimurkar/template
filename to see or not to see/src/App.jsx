
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard'
import { Login } from './Components/Login'
import { SignUp } from './Components/Signup'
import { Navbar } from './Components/Navbar'
import { PrivateRoute } from './Routes/PrivateRoute'
import { useSelector } from 'react-redux'

function App() {

  const {isAuthenticated}=useSelector((state)=>state.login)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* private */}
        <Route path='/dashboard' element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
                <Dashboard/>
        </PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
      </Routes>
    </div>
  )
}

export default App
