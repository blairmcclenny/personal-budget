const createId = (data) => {
  const latestRecord = data[data.length - 1]
  const newId = latestRecord.id + 1

  if (newId === NaN || newId < 0 || newId === undefined) {
    console.error("Invalid ID")
  }

  return newId
}

const findById = (data, recordId) => {
  const record = data.find((item) => item.id === parseInt(recordId))

  if (!record) {
    console.log("Record not found")
  }

  return record
}

module.exports = {
  createId,
  findById,
}
