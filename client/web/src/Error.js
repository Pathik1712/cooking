import React, { useContext } from "react"
import Appcon from "./context/usehome.js"

const Error = () => {
  const { loc } = useContext(Appcon)
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1 style={{ fontSize: "5rem", textTransform: "capitalize" }}>
        <span style={{ color: "crimson" }}>404 </span>
        error
      </h1>
      <h2 style={{ textTransform: "capitalize", fontSize: "2rem" }}>
        page not found or <br /> server not responding
      </h2>
      <button
        style={{
          backgroundColor: "dodgerblue",
          border: "none",
          padding: "5px",
          borderRadius: "0.3rem",
          cursor: "pointer",
          color: "white",
          textTransform: "capitalize",
          fontWeight: "bolder",
        }}
        onClick={() => {
          loc("/")
        }}
      >
        go to home page
      </button>
    </div>
  )
}

export default Error
