import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Appcon = createContext()

export const Dataprovider = ({ children }) => {
  const [log, setlogin] = useState(true)
  const [username, setuser] = useState("")
  const [pass, setpass] = useState("")
  const [signin, setsign] = useState(document.cookie)
  const [pop, setpop] = useState(false)
  const [rec_obj, setrec] = useState([])
  const loc = useNavigate()
  const [media, setmedia] = useState(window.localStorage.getItem("media"))
  useEffect(() => {
    const set = async () => {
      let temp = await axios.get("http://localhost:3001/recepies")
      let data = temp.data
      setrec(data)
    }
    set()
    if (!signin) {
      window.localStorage.clear()
    }
  }, [])
  return (
    <Appcon.Provider
      value={{
        pass,
        setpass,
        username,
        setuser,
        log,
        setlogin,
        signin,
        setsign,
        pop,
        setpop,
        rec_obj,
        setrec,
        loc,
        media,
        setmedia,
      }}
    >
      {children}
    </Appcon.Provider>
  )
}
export default Appcon
