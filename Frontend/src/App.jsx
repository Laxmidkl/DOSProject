import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/LandingPage/Home'
import Layout from './components/layout/Layout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Gallery from './pages/gallery/Gallery'
import Courses from './pages/courses/Courses'

const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>

    <Route path='' element ={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/course' element={<Courses/>}/>

    </Route>

    </Routes>
    </BrowserRouter>

  )
}

export default App