import './App.css'
import Starter from './Starter/Starter'
import Dog from './dog/Dog'
import Cat from './cat/Cat'
import DogSignUp from './Forms/Dog_Sign_Up/DogSignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Starter/>} />
      <Route path="/DogSignUp" element={<DogSignUp/>} />
      <Route path="/dog" element={<Dog/>} />
      <Route path="/cat" element={<Cat/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
