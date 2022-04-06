// DO NOT DELETE
import * as React from "react"

// eslint-disable-next-line
export const BreedsSelect = ({ breedsList }) => {

  return (
    <div className="w-full">
      <label>
        {"犬種: "}
        <select disabled={breedsList == null}>
          {breedsList != null && (
            // eslint-disable-next-line
            breedsList.map(breed => (
              <option value={breed} key={breed}>{breed}</option>
            ))
          )}
        </select>
      </label>
    </div>
  )
}