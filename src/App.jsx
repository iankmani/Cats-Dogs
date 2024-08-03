import './App.css'
import Starter from './Starter/Starter'
import Dog from './dog/Dog'
import Cat from './cat/Cat'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Starter/>} />
      <Route path="/dog" element={<Dog/>} />
      <Route path="/cat" element={<Cat/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
