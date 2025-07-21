// @ts-check

import { useState } from "react"
import { COLORS, NUMBERS } from "@/constants"
import { generateSpotsOrder, showSpots } from "@/functions"
import { SoccerGate } from "@/components/SoccerGate"


export function App() {
  const [spots, setSpots] = useState(showSpots(generateSpotsOrder(COLORS, NUMBERS), 2))
  console.log(spots)

  return (
    <div className="game">
      <div className="wrapper">
        <SoccerGate spots={spots} />
      </div>
    </div>
  )
}
