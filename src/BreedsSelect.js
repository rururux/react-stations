// DO NOT DELETE
import * as React from "react"

// eslint-disable-next-line
export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {

  return (
    <div className="w-full">
      <label>
        <span className="mr-4">Breeds List</span>
        <select className="select" value={selectedBreed} disabled={breeds == null} onChange={onChange}>
          {breeds == null? (
            <option>読み込み中...</option>
          ): (
            <>
              <option value="null" disabled>Select...</option>
              {/* eslint-disable-next-line */}
              {breeds.map(breed => (
                <option value={breed} key={breed}>{breed.replace(/^(.)/, (_, firstLetter) => firstLetter.toUpperCase())}</option>
              ))}
            </>
          )}
        </select>
      </label>
    </div>
  )
}