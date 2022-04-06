// DO NOT DELETE
import * as React from "react"
import { BreedsSelect } from "./BreedsSelect"
import { Button } from "./Button"

export const DogListContainer = () => {
  const [ breeds, setBreeds ] = React.useState(null)
  const [ selectedBreed, setSelectedBreed ] = React.useState()
  const [ dogImageList, setDogImageList ] = React.useState([])

  const getDogImages = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(r => r.json())
      .then(r => setDogImageList(r.message))
  }

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(r => r.json())
      .then(r => setBreeds(Object.keys(r.message)))
  }, [])

  return (
    <div className="dog-list">
      <div className="flex dog-list-select">
        <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={e => setSelectedBreed(e.target.value)} />
        <Button onClick={getDogImages}>表示</Button>
      </div>
      <div className="dog-list-images">
        {dogImageList.map(dogImage => (
          <img className="dog-image" src={dogImage} key={dogImage} />
        ))}
      </div>
    </div>
  )
}