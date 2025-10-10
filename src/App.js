import { Routes, Route} from "react-router-dom"

import Home from "./components/Home"
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Projects from './components/Projects'

import './App.css'

const App = ()=>{
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/education" element={<Education />}/>
      <Route exact path="/certificates" element={<Certificates />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/projects" element={<Projects />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App;
