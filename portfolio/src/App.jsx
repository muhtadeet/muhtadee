// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cover from './components/Cover'
import Photos from './components/Photos'
import Arts from './components/Arts'
import Contact from './components/Contact'
// import Navmenu from './components/Navmenu'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          {/* <Navmenu /> */}
          <Route index element={<Cover />} />
          <Route path='/home' element={<Cover />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/arts' element={<Arts />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
