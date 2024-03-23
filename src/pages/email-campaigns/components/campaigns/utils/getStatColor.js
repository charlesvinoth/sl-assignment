const getStatColor = (stat) => {
  switch (stat) {
    case 'Clicked':
      return 'warning-2'
    case 'Opened':
      return 'purple'
    case 'Replied':
      return 'cyan'
    case 'Positive Reply':
      return 'positive'
    default:
      return 'primary-2'
  }
}

export default getStatColor
