module.exports = function formatKeys(obj) {
  const formattedObj = {}

  for (const key in obj) {
    const formattedKey = key
      .split(/\s+/)
      .map((part, index) =>
        index === 0
          ? part.charAt(0).toLowerCase() + part.slice(1)
          : part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join('')

    if (Array.isArray(obj[key])) {
      formattedObj[formattedKey] = obj[key].map((item) => {
        if (typeof item === 'object' && item !== null) {
          return formatKeys(item)
        }
        return item
      })
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      formattedObj[formattedKey] = formatKeys(obj[key])
    } else {
      formattedObj[formattedKey] = obj[key]
    }
  }

  return formattedObj
}
