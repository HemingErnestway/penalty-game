// @ts-check

import { Spot } from "@/components/Spot"

/**
 * @typedef {Object} SoccerGateProps
 * @property {TSpot[]} spots
 */

/** @param {SoccerGateProps} props */
export function SoccerGate({ spots }) {
  const positionedSpots = spots.sort((a, b) => a.position - b.position)

  return (
    <div className="soccer-gate">
      {positionedSpots.map((spot) => (
        <Spot spot={spot} key={spot.position} />
      ))}
    </div>
  )
}
