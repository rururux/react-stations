// DO NOT DELETE
import * as React from "react";
import Button from "./Button"
import DogImage from "./DogImage"

// eslint-disable-next-line
const Description = ({ dogImageSrc, getRandomDogImage }) => {
  return (
    <div className="flex">
      <div className="description">犬の画像を表示するサイトです。</div>
      <div className="flex-col">
        <DogImage src={dogImageSrc} />
        <Button onClick={getRandomDogImage}>変更</Button>
      </div>
    </div>
  )
}

export default Description