import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import Recepie from "./Recepie"
import Add from "./Add"
import Main from "./Main"
import Error from "./Error"
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/recepies'>
          <Route
            index
            element={<Recepie />}
          />
          <Route
            path='/recepies/add'
            element={<Add />}
          />
          <Route
            path='/recepies/:id'
            element={<Main />}
          />
        </Route>
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </div>
  )
}

export default App
