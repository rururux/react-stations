// DO NOT DELETE
import * as React from "react"

// eslint-disable-next-line
export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {

  return (
    <div className="w-full">
      <label>
        {"犬種: "}
        <select value={selectedBreed} disabled={breeds == null} onChange={onChange}>
          {breeds != null && (
            // eslint-disable-next-line
            breeds.map(breed => (
              <option value={breed} key={breed}>{breed}</option>
            ))
          )}
        </select>
      </label>
    </div>
  )
}