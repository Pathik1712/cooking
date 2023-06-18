import React, { useContext, useEffect, useRef, useState } from "react"
import getcooki from "./getcooki.js"
import axios from "axios"
import { Link } from "react-router-dom"
import "./add.css"
import pic1 from "./svg/1.png"
import pic2 from "./svg/2.png"
import pic3 from "./svg/3.png"
import Appcon from "./context/usehome.js"

const Add = () => {
  let refr = useRef()
  const [add_ing, setadd_ing] = useState([])
  const [ing, seting] = useState("")
  const [title, settitle] = useState("")
  const [rec, setrece] = useState("")
  const [imglink, setimglink] = useState("")
  const { loc, media, rec_obj, setrec } = useContext(Appcon)
  let dataq = JSON.parse(media)
  useEffect(() => {
    const anm = () => {
      let elm = document.getElementsByClassName("svg1")
      for (let i = 0; i <= 2; i++) {
        let a = Math.floor(Math.random() * 85 + 5)
        let b = Math.floor(Math.random() * 85 + 5)
        elm[i].style.transform = `translate(${a}vw,${b}vh)`
      }
    }
    setTimeout(anm, 100)
    const rem = setInterval(anm, 15000)
    return () => clearInterval(rem)
  }, [])
  console.log(dataq)
  const handelsub = async (e) => {
    e.preventDefault()
    let method = {
      name: title,
      ingridients: add_ing,
      method: rec,
      url: imglink,
      owner: getcooki("uid"),
      social_media: dataq,
    }
    await axios.post("http://localhost:3001/recepies/add", method, {
      headers: { auth: getcooki("token") },
    })
    let t = [...rec_obj, method]
    setrec(t)
    loc("/recepies")
  }
  return (
    <main className='add'>
      <nav className='add_nav'>
        <h1>cooking</h1>
        <Link to='/recepies'>
          <svg
            viewBox='0 0 1024 1024'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              id='SVGRepo_bgCarrier'
              strokeWidth='0'
            ></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path d='M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z'></path>
              <path d='m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z'></path>
            </g>
          </svg>
        </Link>
      </nav>
      <form
        className='add_form'
        onSubmit={(e) => {
          handelsub(e)
        }}
      >
        <div className='add_wrap'>
          <input
            required={true}
            className='add_input'
            onChange={(e) => {
              settitle(e.target.value)
            }}
            placeholder=' '
            type='text'
            id='title'
          />
          <label htmlFor='title'>Enter Title</label>
        </div>
        <div className='ing'>
          <ul>
            {add_ing.map((i, n) => (
              <li
                className='add_ing'
                key={n}
              >
                {i}
              </li>
            ))}
          </ul>
          <div className='add_wrap'>
            <input
              className='add_input'
              onChange={(e) => {
                seting(e.target.value)
              }}
              ref={refr}
              placeholder=' '
              type='text'
              id='ing'
            />
            <label htmlFor='ing'>Ingridients</label>
            <button
              className='add_btn'
              type='button'
              onClick={() => {
                setadd_ing([...add_ing, ing])
                refr.current.value = ""
                refr.current.focus()
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className='add_wrap'>
          <textarea
            required={true}
            rows={15}
            className='add_input'
            onChange={(e) => {
              setrece(e.target.value)
            }}
            placeholder=' '
            id='rec'
          />
          <label htmlFor='rec'>Recepie</label>
        </div>
        <div className='add_wrap'>
          <input
            required={true}
            className='add_input'
            onChange={(e) => {
              setimglink(e.target.value)
            }}
            placeholder=' '
            type=''
            id='img'
          />
          <label htmlFor='img'>Img Link</label>
        </div>
        <img
          src={pic2}
          alt=''
          className='svg1'
          style={{ zIndex: "-20" }}
        />
        <img
          src={pic3}
          alt=''
          className='svg1'
          style={{ zIndex: "-30" }}
        />
        <img
          src={pic1}
          style={{ zIndex: "-10" }}
          alt='hello'
          className='svg1'
        />
        <button
          type='submit'
          className='add_btn'
        >
          create
        </button>
      </form>
    </main>
  )
}

export default Add
