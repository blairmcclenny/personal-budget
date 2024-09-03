const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const envelopes = require("./routes/envelopes")

app.use(bodyParser.json())
app.use("/api/envelopes", envelopes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
