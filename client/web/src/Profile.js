import React, { useContext, useEffect, useState } from "react"
import appcon from "./context/usehome.js"
import dcooki from "./deletecooki.js"
import "./profile.css"
import axios from "axios"
import getcooki from "./getcooki.js"
import { Link } from "react-router-dom"

const Profile = () => {
  let [res, setres] = useState([])
  const { media, loc, setsign, setmedia } = useContext(appcon)
  useEffect(() => {
    const d = async () => {
      try {
        let temp = await axios.post(
          "http://localhost:3001/recepies/user",
          {
            uid: getcooki("uid"),
          },
          { headers: { auth: getcooki("token") } }
        )
        let data = temp.data
        if (data !== null) {
          setres(data)
        }
      } catch (err) {
        loc("*")
      }
    }
    d()
  }, [])
  const array = ["Instagram", "Youtube", "Twitter", "Facebook"]
  const [val, setval] = useState("")
  let temp = JSON.parse(media)
  const update = []
  for (let i in temp) {
    update.push([temp[i][0], temp[i][1]])
  }
  return (
    <main className='profile'>
      <div className='recepies'>
        <h1>Recepies:</h1>
        {res.length !== 0 && (
          <div className='r-contain'>
            {res.map((i, n) => (
              <div
                className='r-banner anm'
                key={n}
              >
                <div className='img_h'>
                  <img
                    alt='there'
                    src={`${i.url}`}
                  />
                </div>
                <article>
                  <h1>{i.name}</h1>
                  <p style={{ overflowY: "hidden" }}>
                    {i.method.slice(0, 120)}...
                  </p>
                </article>
                <div className='profile-btn'>
                  <Link
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.sessionStorage.setItem("data", JSON.stringify(i))
                    }}
                    to={`/recepies/${i._id}`}
                  >
                    see more
                  </Link>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={async (e) => {
                      e.target.disabled = true
                      await axios.delete("http://localhost:3001/recepies/", {
                        id: i._id,
                      })
                      let del = res.filter((item) => i._id !== item._id)
                      setres(del)
                      e.target.disabled = false
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {res.length === 0 && (
          <h2 className='war-text'>
            you didn't post
            <br />
            any recepie
          </h2>
        )}
      </div>
      <div className='general'>
        <div className='chart'>
          <h2 className='chart_title'>Recepie Count:</h2>
          <div className='number'>
            <span>{res.length}</span>
          </div>
        </div>
        <ul className='social_med'>
          {array.map((i, n) => (
            <li key={n}>
              <div className='logo'>
                {n === 0 ? (
                  <svg
                    width='1.6rem'
                    height='1.6rem'
                    viewBox='0 0 3364.7 3364.7'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
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
                      <defs>
                        <radialGradient
                          id='0'
                          cx='217.76'
                          cy='3290.99'
                          r='4271.92'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop
                            offset='.09'
                            stopColor='#fa8f21'
                          ></stop>
                          <stop
                            offset='.78'
                            stopColor='#d82d7e'
                          ></stop>
                        </radialGradient>
                        <radialGradient
                          id='1'
                          cx='2330.61'
                          cy='3182.95'
                          r='3759.33'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop
                            offset='.64'
                            stopColor='#8c3aaa'
                            stopOpacity='0'
                          ></stop>
                          <stop
                            offset='1'
                            stopColor='#8c3aaa'
                          ></stop>
                        </radialGradient>
                      </defs>
                      <path
                        d='M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9'
                        fill='url(#0)'
                      ></path>
                      <path
                        d='M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9'
                        fill='url(#1)'
                      ></path>
                      <path
                        d='M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57'
                        fill='#ffffff'
                      ></path>
                    </g>
                  </svg>
                ) : n === 1 ? (
                  <svg
                    width='1.8rem'
                    height='1.8rem'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      fill='red'
                      d='M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z'
                    />
                    <path
                      fill='#ffffff'
                      d='M6.593 10.11l3.644-2.098-3.644-2.11v4.208z'
                    />
                  </svg>
                ) : n === 2 ? (
                  <svg
                    viewBox='0 -4 48 48'
                    width='1.6rem'
                    height='1.6rem'
                    fill='#000000'
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
                      <title>TwitterColor</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id='Icons'
                        stroke='none'
                        strokeWidth='1'
                        fill='none'
                        fillRule='evenodd'
                      >
                        <g
                          id='Color-'
                          transform='translate(-300.000000, -164.000000)'
                          fill='#00AAEC'
                        >
                          <path
                            d='M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283'
                            id='twitter'
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 16 16'
                    height='1.8rem'
                    width='1.8rem'
                    fill='none'
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
                      <path
                        fill='#1877F2'
                        d='M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z'
                      ></path>
                      <path
                        fill='#ffffff'
                        d='M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z'
                      ></path>
                    </g>
                  </svg>
                )}
                <input
                  type='text'
                  className='user-name'
                  defaultValue={update[n][1] ? update[n][1] : i}
                  onChange={(e) => {
                    setval(e.target.value)
                  }}
                />
              </div>
              <div className='handler'>
                <div className='button_wrap'>
                  <input
                    type='checkbox'
                    defaultChecked={update[n][0] === "true" ? true : false}
                    id={i}
                    onChange={async (e) => {
                      e.target.disabled = true
                      if (update[n][1] === null) {
                        alert("user name required of platform")
                        document.getElementById(i).checked = false
                        e.target.disabled = false
                        return
                      }
                      update[n][0] = `${e.target.checked}`
                      await axios.put("http://localhost:3001/", {
                        uid: getcooki("uid"),
                        social_media: update,
                      })
                      let t = {
                        insta: update[0],
                        youtube: update[1],
                        twitter: update[2],
                        facebook: update[3],
                      }
                      setmedia(JSON.stringify(t))
                      window.localStorage.setItem("media", JSON.stringify(t))
                      e.target.disabled = false
                    }}
                  />
                  <label htmlFor={i}></label>
                </div>
                <button
                  onClick={async (e) => {
                    e.target.disabled = true
                    if (val === "") {
                      alert("you didn't change anything")
                      e.target.disabled = false
                      return
                    }
                    update[n][0] = true
                    update[n][1] = val
                    await axios.put("http://localhost:3001/", {
                      uid: getcooki("uid"),
                      social_media: update,
                    })
                    console.log(document.getElementById(i))
                    document.getElementById(i).checked = true
                    let t = {
                      insta: update[0],
                      youtube: update[1],
                      twitter: update[2],
                      facebook: update[3],
                    }
                    setmedia(JSON.stringify(t))
                    window.localStorage.setItem("media", JSON.stringify(t))
                    setval("")
                    alert("change saved")
                    e.target.disabled = false
                  }}
                >
                  <svg
                    viewBox='0 0 24 24'
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
                      {" "}
                      <path
                        d='M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z'
                        strokeWidth='2'
                      ></path>{" "}
                      <path
                        d='M16.2739 11.1377C16.6644 10.7472 16.6644 10.114 16.2739 9.7235L14.4823 7.9319C14.0918 7.54137 13.4586 7.54138 13.0681 7.9319L8.96106 12.0389L8.34768 15.7477C8.3365 15.8154 8.39516 15.874 8.4628 15.8627L12.1669 15.2448L16.2739 11.1377Z'
                        strokeWidth='2'
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          className='logout'
          onClick={() => {
            dcooki("token")
            dcooki("uid")
            window.localStorage.clear()
            setsign(false)
            loc("/")
          }}
        >
          Logout
        </button>
      </div>
    </main>
  )
}

export default Profile
