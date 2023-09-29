import React, { useEffect, useState } from "react"
import "./recipie.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import appcon from "./context/usehome.js"
import mk from "./img/mk.png"
import mg from "./1.png"
const Recepie = () => {
  const { signin, setpop, rec_obj } = useContext(appcon)
  const [search, setsearch] = useState("")
  const [res, setres] = useState([])
  useEffect(() => {
    let temp = rec_obj.filter((i) => i.name.includes(search))
    setres(temp)
  }, [search, rec_obj])

  useEffect(() => {
    const nav = () => {
      let a = document.getElementsByClassName("r-form")[0]
      if (a.offsetTop !== 0) {
        a.style.boxShadow = "0 2px 20px black"
      } else {
        a.style.boxShadow = "none"
      }
    }
    window.addEventListener("scroll", nav)
    return () => window.removeEventListener("scroll", nav)
  }, [])
  useEffect(() => {
    const anm = () => {
      let a = document.getElementsByClassName("r-banner")
      let height = window.innerHeight
      for (let i = 0; i < a.length; i++) {
        let elm = a[i].getBoundingClientRect().top
        if (elm <= height - 50) {
          a[i].classList.add("anm")
        } else {
          a[i].classList.remove("anm")
        }
      }
    }
    window.addEventListener("scroll", anm)
    return () => window.removeEventListener("scroll", anm)
  })
  return (
    <main className='r-main'>
      <nav className='r-form'>
        <div className='wrap'>
          <input
            className='input'
            type='text'
            id='search'
            placeholder=' '
            onChange={(e) => {
              setsearch(e.target.value)
            }}
          />
          <label
            htmlFor='search'
            className='label'
          >
            <span className='sp'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 16 16'
              >
                <path
                  fill='gray'
                  d='M10.68 11.74a6 6 0 0 1-7.922-8.982a6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z'
                />
              </svg>
            </span>
            Search
          </label>
        </div>
        <button className='r-btn'>
          <input
            type='checkbox'
            id='r-btn'
          />
          <div className='strip'></div>
          <div className='strip'></div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {signin && <Link to={"/recepies/add"}>Add</Link>}
              {!signin && (
                <Link
                  to={"/"}
                  onClick={() => {
                    setpop(true)
                  }}
                >
                  Add
                </Link>
              )}
            </li>
          </ul>
        </button>
      </nav>
      <div className='r-contain'>
        {res.map((i, n) => (
          <div
            className='r-banner anm'
            key={n}
          >
            <div className='img_h'>
              <img
                alt=''
                src={`${i.url}`}
              />
            </div>
            <article>
              <h1>{i.name}</h1>
              <p style={{ overflowY: "hidden" }}>{i.method.slice(0, 120)}...</p>
            </article>
            <Link
              style={{ cursor: "pointer" }}
              to={`/recepies/${i._id}`}
              onClick={() => {
                window.sessionStorage.setItem("data", JSON.stringify(i))
              }}
            >
              see more
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Recepie
