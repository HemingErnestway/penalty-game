// @ts-check

import { COLOR_VALUES, COLORS } from "@/constants"

/**
 * @typedef {Object} SpotProps
 * @property {TSpot} spot
 * @property {() => void} handleClick
 */

/** @param {SpotProps} props */
export function Spot({ spot, handleClick }) {
  if (!spot.visible) return <div className="spot invisible">{spot.value}</div>
  if (!spot.revealed) return <div className="spot unrevealed">?</div>

  // spot with color
  if (COLORS.includes(spot.value)) {
    return (
      <div
        className="spot"
        style={{ backgroundColor: COLOR_VALUES[spot.value] }}
        onClick={handleClick}
      ></div>
    )
  }

  // spot with number
  return (
    <div
      className="spot"
      onClick={handleClick}
    >
      {spot.value}
    </div>
  )
}
