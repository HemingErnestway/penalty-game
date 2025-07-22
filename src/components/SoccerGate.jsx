// @ts-check

import { Spot } from "@/components/Spot"

/**
 * @typedef {Object} SoccerGateProps
 * @property {TSpot[]} spots
 * @property {(number) => void} handleSpotClick
 */

/** @param {SoccerGateProps} props */
export function SoccerGate({ spots, handleSpotClick }) {
  const positionedSpots = spots.sort((a, b) => a.position - b.position)

  return (
    <div className="soccer-gate">
      {positionedSpots.map((spot) => (
        <Spot
          spot={spot}
          handleClick={() => handleSpotClick(spot.position)}
          key={spot.position}
        />
      ))}
    </div>
  )
}
