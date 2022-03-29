import * as React from "react"
import "../styles/button.css"

const Button = (props) => {
  return (
    // eslint-disable-next-line
    <button className="button" onClick={props.onClick}>{props.children}</button>
  )
}

export default Button