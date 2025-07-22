// @ts-check

import { useState } from "react"

import { COLORS, NUMBERS } from "@/constants"
import { generateSpotsOrder, showSpots } from "@/functions"
import { SoccerGate } from "@/components/SoccerGate"

export function App() {
  const initialSpots = showSpots(generateSpotsOrder(COLORS, NUMBERS), 2)
  const [spots, setSpots] = useState(initialSpots)

  /**
   * @param {number} position
   */
  function handleSpotClick(position) {
    const newSpots = [...spots]
    const spot = newSpots.find(spot => spot.position === position)
    spot.revealed = false
    setSpots(newSpots)
  }

  return (
    <div className="game">
      <div className="wrapper">
        <SoccerGate spots={spots} handleSpotClick={handleSpotClick} />
        <div style={{ backgroundColor: "lightgray", height: "100px" }}>

        </div>
      </div>
    </div>
  )
}
