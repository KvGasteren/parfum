import React from 'react'
const AddResource = () => {
  // als dit vanuit een parfum gedaan wordt, dan kan je ook meteen een hoeveelheid toevoegen
  // als je "los" een grondstof toevoegt, dan niet, maar alleen allergenen indien aanwezig

  return (
    <div>
      <input placeholder='Naam' /> <input placeholder='Hoeveelheid' />{' '}
      <button>annuleer</button> <button>voeg toe</button>
    </div>
  )
}

export default AddResource
