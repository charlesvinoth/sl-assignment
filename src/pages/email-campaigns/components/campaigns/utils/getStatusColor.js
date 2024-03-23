const getStatusColor = (status) => {
  switch (status) {
    case 'Sent':
      return 'positive'
    case 'Stopped':
      return 'negative'
    case 'Paused':
      return 'warning'
    default:
      return ''
  }
}

export default getStatusColor
