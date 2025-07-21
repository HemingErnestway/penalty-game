// @ts-check

import { Spot } from "@/components/Spot"

/**
 * @typedef {Object} SoccerGateProps
 * @property {TSpot[]} spots
 */

/** @param {SoccerGateProps} props */
export function SoccerGate({ spots }) {
  const sortedSpots = spots.sort((a, b) => a.id - b.id)

  return (
    <div className="soccer-gate">
      {sortedSpots.map((spot) => (
        <Spot spot={spot} key={spot.id} />
      ))}
    </div>
  )
}
