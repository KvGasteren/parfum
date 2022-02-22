function App() {
  const ingredienten = [
    {
      naam: "Water",
      units: 20
    },
    {
      naam: "Zout-pepermix",
      units: 12,
      allergenen: [
        {
          naam: "Peper",
          percentage: 0.05
        },
        { 
          naam: "Zout",
          percentage: 0.20
        }
      ]

    },
    {
      naam: "Peper",
      units: 4,
      allergenen: [
        {
          naam: "Peper",
          percentage: 1
        }
      ]
    }
  ]

  
  const getAllergenen = (ingredienten) => {
    let results = []
    // doorloop alle ingredienten
    ingredienten.forEach((ingredient, _, arr) => {
      const tot = arr.reduce((p, c) => p + c.units, 0) // totaal aantal units voor percentages van grondstof in parfum
  
      // bereken percentage ingredient in parfum
      const perc = ingredient.units/tot 
      
      if (!ingredient.allergenen) return // geen actie als er geen allergenen zijn
      
      // doorloop de allergenen in deze grondstof
      ingredient.allergenen.forEach(a => {
          // check of dit allergeen al in de resultaatarray staat
          const res = results.find(r => r.naam === a.naam)
          if (res) { // zo ja, update de array door het percentage van dit allergeen te verhogen
            results = results.map(r => r.naam === a.naam ? { ...r, percentage: r.percentage + a.percentage * perc } : r )
          } else { // zo nee, voeg het percentage van dit allergeen toe
            results = results.concat({ naam: a.naam, percentage: a.percentage * perc })
          }
      })
    })
    return results
  }
  
  const allergenen = getAllergenen(ingredienten)
  
  return (
    <div>
      <h2>Parfumnaam</h2>
      <div>
        <h3>Ingrediënten</h3>
        <table>
          <thead>
            <tr>
              <td>Naam</td>
              <td>Units</td>
            </tr>
          </thead>
          <tbody>
            {ingredienten.map(i => (
              <tr key={i.naam}>
                <td>{i.naam}</td>
                <td>{i.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Allergenen</h3>
        <table>
        <thead>
            <tr>
              <td>Naam</td>
              <td>Percentage</td>
            </tr>
          </thead>
          <tbody>
          {allergenen && allergenen.map(a => (
              <tr key={a.naam}>
                <td>{a.naam}</td>
                <td>{parseFloat(a.percentage*100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
