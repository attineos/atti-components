function lightenDarken(color, percent) {
  const num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt, //eslint-disable-line
    B = ((num >> 8) & 0x00ff) + amt, //eslint-disable-line
    G = (num & 0x0000ff) + amt //eslint-disable-line

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1)}`
}

export default lightenDarken
