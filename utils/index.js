const createId = (data) => {
  const latestRecord = data[data.length - 1]
  const newId = latestRecord.id + 1

  if (newId === NaN || newId < 0 || newId === undefined) {
    console.error("Invalid ID")
  }

  return newId
}

module.exports = {
  createId,
}
