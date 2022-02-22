import React, { useState } from 'react'
import { allergens } from '../utilities/constants'

const AddAllergen = () => {
  // als dit vanuit een parfum gedaan wordt, dan kan je ook meteen een hoeveelheid toevoegen
  // als je "los" een grondstof toevoegt, dan niet, maar alleen allergenen indien aanwezig
  const [allergen, setAllergen] = useState(allergens[0])

  const changeAllergen = (e) => {
    const allergenName = e.target.value
    setAllergen(allergens.find((a) => a.name === allergenName))
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Allergeen</td>
            <td>CAS nr</td>
            <td>Percentage</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <select value={allergen.name} onChange={changeAllergen}>
                {allergens.map((a) => {
                  return (
                    <option value={a.name} key={a.name}>
                      {a.name}
                    </option>
                  )
                })}
              </select>
            </td>
            <td><input disabled value={allergen.cas} /></td>
            <td><input placeholder='percentage' /></td>
            <td><button>annuleer</button></td>
            <td><button>voeg toe</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AddAllergen
