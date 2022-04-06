import * as React from "react"

export const Button = (props) => {
  return (
    // eslint-disable-next-line
    <button className="button" onClick={props.onClick}>{props.children}</button>
  )
}