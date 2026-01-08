import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/LandingPage/Home'
import Layout from './components/layout/Layout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'

const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>

    <Route path='' element ={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>

    </Route>

    </Routes>
    </BrowserRouter>

  )
}

export default App