const emptyNullFilter = {
  name: 'emptyNull',
  handler: (val) => {
    if (!val && val !== 0) {
      return '--'
    } else {
      return val
    }
  }
}

export default [
  emptyNullFilter
]