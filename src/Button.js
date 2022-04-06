import * as React from "react"

const Button = (props) => {
  return (
    // eslint-disable-next-line
    <button className="button" onClick={props.onClick}>{props.children}</button>
  )
}

export default Button