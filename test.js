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

// de allergenen moeten worde uitgerekend uit de ingredienten
// eerst moeten we per ingredient het precentage in het parfum 
// berekenen

// const totaalUnits = ingredienten.reduce((p, c) => p + c.units, 0)
// let ingredientPercentages = ingredienten.map(i => {
//   return i.units/totaalUnits
// })

// // nu moeten we van ieder ingredient van iedere allergeen het product van allergeenpercentage en ingredientpercentage berekenen.
// // eerst een functie die we per ingredieent kunnen aanroepen met ingredient en ingredientpercentage

// const allergenPercentagesPerIngredient = (ingredient, ingredientPercentage) => {
//   console.log(ingredient)
//   if (!ingredient.allergenen) return {}
//   return ingredient.allergenen.map(allergeen => {
//     return {
//       ...allergeen,
//       percentage: allergeen.percentage * ingredientPercentage
//     }
//   })
// }

// console.log(ingredientPercentages)
// console.log(allergenPercentagesPerIngredient(ingredienten[1], ingredientPercentages[1]))


// const allergenenMetDubbel = ingredienten.flatMap((ingredient, index) => {
//   return allergenPercentagesPerIngredient(ingredient, ingredientPercentages[index])
// })

// // Dit is een oplossing, er is een vast aantal allergenen, dus we kunnen op deze manier de percentages opzoeken en invullen

// let allergenen = {
//   'Peper': 0, 'Zout': 0, 'Suiker': 0
// }
//  allergenenMetDubbel.forEach(a => {
//    console.log(a)
//    allergenen[a.naam] += a.percentage
//  })

// maar het kan ook anders:
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

console.log(getAllergenen(ingredienten))