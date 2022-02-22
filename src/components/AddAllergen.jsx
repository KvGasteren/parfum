import React, { useState } from 'react'
/* 
  Allergens moeten als props worden meegegeven en aangepast worden met de handlers van de verschillende buttons
  Alle allergens met een percentage eigenschap worden getoond in de grondstof
  Dit is dus als het ware het grondstofdetailscherm
*/
import { allergens } from '../utilities/constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheck, faPen, faTrash  } from '@fortawesome/free-solid-svg-icons'



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
            <td><input placeholder="0.0578 voor 5.78%"/></td>
            <td><FontAwesomeIcon icon={faBan} /></td>
            <td><FontAwesomeIcon icon={faCheck} /></td>
          </tr >
          {allergens.map(a => {
            if (a.percentage && a.percentage > 0) {
              return (
                <tr>
                  <td>{a.name}</td>
                  <td>{a.cas}</td>
                  <td>{`${(a.percentage * 100).toFixed(6)}%`}</td>
                  <td><FontAwesomeIcon icon={faPen} /></td>
                  <td><FontAwesomeIcon icon={faTrash} /></td>
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
