const express = require("express")
const app = express()
const port = 3000

const envelopes = require("./routes/envelopes")

app.use("/api/envelopes", envelopes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
