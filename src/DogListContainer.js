// DO NOT DELETE
import * as React from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {
  const [ breeds, setBreeds ] = React.useState(null)
  const [ selectedBreed, setSelectedBreed ] = React.useState()

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(r => r.json())
      .then(r => setBreeds(Object.keys(r.message)))
  }, [])

  return (
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={e => setSelectedBreed(e.target.value)} />
  )
}