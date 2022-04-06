// DO NOT DELETE
import * as React from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {
  const [ breedsList, setBreedsList ] = React.useState(null)

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(r => r.json())
      .then(r => setBreedsList(Object.keys(r.message)))
  }, [])

  return (
    <BreedsSelect breedsList={breedsList} />
  )
}