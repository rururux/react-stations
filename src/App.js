// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Button } from './Button'
import { Description } from './Description'
import { DogImage } from './DogImage'
import { Header } from "./header"

const apiUrl = "https://dog.ceo/api/breeds/image/random"
const initialSrc = "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [ dogImageSrc, setDogImageSrc ] = React.useState(initialSrc)

  const getRandomDogImage = async () => {
    const data = await fetch(apiUrl).then(r => r.json())

    setDogImageSrc(data.message)
  }

  return (
    <div className="px-12">
      <Header />
      <div className="flex">
        <Description />
        <div className="flex-col">
          <DogImage url={dogImageSrc} />
          <Button onClick={getRandomDogImage}>変更</Button>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  )
}