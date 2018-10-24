// returns a numeric value from the name
export function sumChars(name) {
  let sum = 0
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i)
  }
  return sum * 2
}

// extracts initials from names
export function abbrev_name(name) {
  const split_names = name.trim().split(' ')
  let abbr = ''
  for (let i = 0; i < split_names.length; i++) {
    const firstChar = split_names[i].charAt(0)
    abbr += firstChar
    if (i == 2) {
      break
    }
  }
  return abbr
}
