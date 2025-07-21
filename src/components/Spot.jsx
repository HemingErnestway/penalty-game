// @ts-check

import { COLOR_VALUES, COLORS } from "@/constants"

/**
 * @typedef {Object} SpotProps
 * @property {TSpot} spot
 */

/** @param {SpotProps} props */
export function Spot({ spot }) {
  if (!spot.visible) {
    return <div className="spot invisible"></div>
  }

  if (COLORS.includes(spot.value)) {
    return (
      <div
        className="spot"
        style={{ backgroundColor: COLOR_VALUES[spot.value] }}
      ></div>
    )
  }

  return (
    <div className="spot" style={{ backgroundColor: "white" }}>
      {spot.value}
    </div>
  )
}
