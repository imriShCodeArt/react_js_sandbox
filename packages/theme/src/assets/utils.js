export function capitalize(str) {
  let tmpStr = ''
  const lowCase = str.toLowerCase()
  lowCase.split('_').map((i) => (tmpStr += i + ' '))

  tmpStr = tmpStr.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  )
  return tmpStr
}

export function lowerCase(str) {
  return str.toLowerCase()
}

export function slugString(str) {
  return str.toLowerCase().replace(/[_ ]/, '-')
}

export function dateString(date) {
  const postDate = new Date(date),
    y = postDate.getFullYear(),
    m = postDate.getMonth() + 1,
    d = postDate.getDate()

  return ` ${y} / ${m < 10 ? '0' + m : m}  / ${d < 10 ? '0' + d : d} `
}
