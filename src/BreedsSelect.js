// DO NOT DELETE
import * as React from "react"

export const BreedsSelect = () => {
  const [ breedsList, setBreedsList ] = React.useState(null)

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(r => r.json())
      .then(r => setBreedsList(Object.keys(r.message)))
  }, [])

  return (
    <div className="w-full">
      <label>
        {"犬種: "}
        <select disabled={breedsList == null}>
          {breedsList != null && (
            breedsList.map(breed => (
              <option value={breed} key={breed}>{breed}</option>
            ))
          )}
        </select>
      </label>
    </div>
  )
}