import React, { useState } from 'react'
/* 
  Allergens moeten als props worden meegegeven en aangepast worden met de handlers van de verschillende buttons
  Alle allergens met een percentage eigenschap worden getoond in de grondstof
  Dit is dus als het ware het grondstofdetailscherm
*/
import { allergens } from '../utilities/constants'



const AddAllergen = () => {
  
  const [allergen, setAllergen] = useState(allergens[0])

  const changeAllergen = (e) => {
    const allergenName = e.target.value
    setAllergen(allergens.find((a) => a.name === allergenName))
  }

  return (
    <div>
      <h2>Grondstofnaam</h2>
      <table style={{borderCollapse: "collapse"}}>
        <tbody>
          <tr>
            <td>Allergeen</td>
            <td>CAS nr</td>
            <td>Percentage</td>
            <td></td>
            <td></td>
          </tr>
          <tr style={{borderBottom: "1px solid"}}>
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
          </tr >
          {allergens.map(a => {
            if (a.percentage && a.percentage > 0) {
              return (
                <tr>
                  <td>{a.name}</td>
                  <td>{a.cas}</td>
                  <td>{`${(a.percentage * 100).toFixed(6)}%`}</td>
                  <td><button>pas aan</button></td>
                  <td><button>verwijder</button></td>
                </tr>
              )
            }
            return null
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AddAllergen
