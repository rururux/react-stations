// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Description from './Description'
import DogImage from './DogImage'
import Header from "./header"

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogImage />
    </div>
  )
}
