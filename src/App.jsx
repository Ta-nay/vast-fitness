
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import {Box} from '@mui/material'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
        </Routes>
      <Footer/>
    </Box>
    </BrowserRouter>
    </>
  )
}

export default App
