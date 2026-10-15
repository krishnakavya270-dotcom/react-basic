import {Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Counter from './components/Counter'
import Homepage from './components/Homepage'
//login
import Todo from './components/Todo'

function App() {
 

  return (
    <>
<Routes>
< Route path='/' element={<Homepage/> }/>
< Route path='/about' element={<About/> }/>
//login
< Route path='/contact' element={<Contact/> }/>
< Route path='/counter' element={<Counter/> }/>
< Route path='/todo' element={<Todo/> }/>
</Routes>
     
    </>
  )
}

export default App
