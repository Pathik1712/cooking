import React, { useContext, useEffect, useState } from "react"
import getcooki from "./getcooki.js"
import { Link, useNavigate } from "react-router-dom"
import fr from "./img/friedrice.png"
import mk from "./img/mk.png"
import mm from "./img/masalamaggi.png"
import mp from "./img/mp.png"
import axios from "axios"
import Appcon from "./context/usehome"
const Home = () => {
  const {
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
    loc,
    setmedia,
  } = useContext(Appcon)
  const login = (str, arg) => {
    if (!signin) {
      let a = document.getElementsByClassName(str)[0]
      a.style.display = arg
      document.getElementsByClassName("link")[0].style.display = "block"
      setlogin(true)
    }
  }
  useEffect(() => {
    if (pop) {
      login("l-back", "grid")
      setpop(false)
    }
  })
  let [response, setres] = useState(false)
  const signup = async (e) => {
    let plink
    if (log === false) {
      plink = "https://rich-lime-reindeer-fez.cyclic.cloud/register"
    } else {
      plink = "https://rich-lime-reindeer-fez.cyclic.cloud/login"
    }
    e.preventDefault()
    let temp = await axios.post(plink, {
      username,
      password: pass,
    })
    setres(temp.data)
    if (temp.data !== null) {
      let a = document.getElementsByClassName("l-back")[0]
      a.style.display = "none"
      document.cookie = `token=${temp.data.token};expires=${new Date(
        new Date().getTime() + 2 * 24 * 60 * 60 * 1000
      )}`
      document.cookie = `uid=${temp.data.uid};expires=${new Date(
        new Date().getTime() + 2 * 24 * 60 * 60 * 1000
      )}`
      window.localStorage.setItem("media", JSON.stringify(temp.data.media))
      setmedia(window.localStorage.getItem("media"))
      setsign(true)
    }
  }
  return (
    <main className='blur'>
      <nav>
        <h1 className='title'>
          <span className='one'>c</span>
          ooking
        </h1>
        <div className='nav'>
          <Link
            to={"/recepies"}
            className='nav-btn'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 16 16'
            >
              <path
                fill='white'
                d='M10.68 11.74a6 6 0 0 1-7.922-8.982a6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z'
              />
            </svg>
          </Link>
          <button
            className='nav-btn'
            onClick={() => {
              if (!signin) {
                login("l-back", "grid")
              } else {
                loc("/profile")
              }
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
            >
              <path
                fill='white'
                d='M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z'
              />
            </svg>
          </button>
        </div>
      </nav>
      <h2 className='h2'>
        learn how <br /> to cook
      </h2>
      <div className='pop'>
        <div className='tem'></div>
        <div className='page'>
          <img
            src={mp}
            alt='not'
            className='slide-image'
          />
          <h3>matar paneer</h3>
        </div>
        <div className='page'>
          <img
            src={mk}
            alt='not'
            className='slide-image'
          />
          <h3>malai kofta</h3>
        </div>
        <div className='page'>
          <img
            src={fr}
            alt='not'
            className='slide-image'
          />
          <h3>fried rice</h3>
        </div>
        <div className='page'>
          <img
            src={mm}
            alt='not'
            className='slide-image'
          />
          <h3>masala maggi</h3>
        </div>
        <div className='tem'></div>
      </div>
      <main className='l-back'>
        <div className='l-sign'>
          <button
            className='close'
            onClick={() => {
              let a = document.getElementsByClassName("l-back")[0]
              a.style.display = "none"
              setres(false)
            }}
          >
            &times;
          </button>
          <form
            className='l-p'
            onSubmit={(e) => signup(e)}
          >
            <div className='wp'>
              <input
                onChange={(e) => setuser(e.target.value)}
                type='text'
                required
                placeholder=' '
                id='nm'
              />
              <label
                htmlFor='nm'
                className='l-l'
              >
                Enter Name
              </label>
            </div>
            <div className='wp'>
              <input
                onChange={(e) => setpass(e.target.value)}
                type='password'
                placeholder=' '
                minLength={8}
                required
                id='ps'
              />
              <label
                htmlFor='ps'
                className='l-l'
              >
                Enter Password
              </label>
            </div>
            <button
              type='submit'
              className='log-btn'
            >
              {log === true ? "login" : "sign up"}
            </button>
          </form>
          <>
            {response === null && (
              <p
                className='warn'
                style={{ color: "crimson" }}
              >
                {log === true
                  ? "invalid user name or password!!!"
                  : "user naem alredy exist!!!"}
              </p>
            )}
          </>
          <button
            className='link'
            onClick={() => {
              setlogin(false)
              document.getElementsByClassName("link")[0].style.display = "none"
              setres(false)
            }}
          >
            didn't have account register
          </button>
        </div>
      </main>
    </main>
  )
}

export default Home
