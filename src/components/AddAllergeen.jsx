import React from 'react'
const AddAllergeen = () => {
  // als dit vanuit een parfum gedaan wordt, dan kan je ook meteen een hoeveelheid toevoegen
  // als je "los" een grondstof toevoegt, dan niet, maar alleen allergenen indien aanwezig

  return (
    <div>
      <select></select> {' '} <input placeholder="percentage" /> { ' '}
      <button>annuleer</button> <button>voeg toe</button>
    </div>
  )
}

export default AddAllergeen
