// DO NOT DELETE
import * as React from "react"
import "../styles/dogImage.css"

// eslint-disable-next-line
const DogImage = ({ src }) => {
  return (
    <img className="dog-image" src={src} alt="かわいい犬の画像" />
  )
}

export default DogImage