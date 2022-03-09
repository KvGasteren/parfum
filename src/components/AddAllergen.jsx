import React, { useEffect, useState } from 'react'
/* 
  Allergens moeten als props worden meegegeven en aangepast worden met de handlers van de verschillende buttons
  Alle allergens met een percentage eigenschap worden getoond in de grondstof
  Dit is dus als het ware het grondstofdetailscherm
*/
import { allergens } from '../utilities/constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBan,
  faCheck,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

const AddAllergen = () => {
  const [allergen, setAllergen] = useState({name: "", cas:""})
  const [allergenen, setAllergenen] = useState([])

  useEffect(() => {
    const result = allergens.map((a) =>
      a.name === 'Cinnamyl alcohol' ? { ...a, percentage: 0.0578 } : a
    )
    setAllergenen(result)
    setAllergen(result[0])
  }, [])

  const changeAllergen = (e) => {
    const allergenName = e.target.value
    setAllergen(allergenen.find((a) => a.name === allergenName))
  }

  const handleDelete = (name) => {
    setAllergenen(
      allergens.map((a) => (a.name === name ? { ...a, percentage: 0 } : a))
    )
  }

  return (
    <div>
      <h2>Grondstofnaam</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td>Allergeen</td>
            <td>CAS nr</td>
            <td>Percentage</td>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ borderBottom: '1px solid' }}>
            <td>
              <select value={allergen.name} onChange={changeAllergen}>
                {allergenen.map((a) => {
                  return (
                    <option value={a.name} key={a.name}>
                      {a.name}
                    </option>
                  )
                })}
              </select>
            </td>
            <td>
              <input disabled value={allergen.cas} />
            </td>
            <td>
              <input placeholder='0.0578 voor 5.78%' />
            </td>
            <td>
              {/* <FontAwesomeIcon icon={faBan} /> */}
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          {allergenen.map((a) => {
            if (a.percentage && a.percentage > 0) {
              return (
                <tr key={a.name}>
                  <td>{a.name}</td>
                  <td>{a.cas}</td>
                  <td>{`${(a.percentage * 100).toFixed(6)}%`}</td>
                  <td>
                    <FontAwesomeIcon icon={faPen} />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(a.name)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
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
