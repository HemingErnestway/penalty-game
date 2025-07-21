// @ts-check

/**
 * @template T
 * @param {Array.<T>} array
 * @returns {Array.<T>}
 */
export function shuffle(array) {
  const arr = [...array]

  for (let i = arr.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

/**
 * @param {SpotColor[]} colors
 * @param {SpotNumber[]} numbers
 * @returns {TSpot[]}
 */
export function generateSpotsOrder(colors, numbers) {
  const spots = [...colors, ...numbers]
    .map((value, index) => ({
      id: index,
      value: value,
      visible: false,
      revealed: false,
    }))

  return shuffle(spots)
}

/**
 * @param {TSpot[]} spots
 * @param {number} amount
 * @returns {TSpot[]}
 */
export function showSpots(spots, amount) {
  const newSpots = [...spots]

  for (let i = 0; i < amount; ++i) {
    spots[i].visible = true
    spots[i].revealed = true
  }

  return newSpots
}
