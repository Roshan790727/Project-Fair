import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true}/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/:id/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
