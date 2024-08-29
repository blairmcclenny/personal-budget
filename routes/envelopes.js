const express = require("express")
const router = express.Router()

const envelopes = require("../config/db")
const { createId } = require("../utils")

router.get("/", (req, res) => {
  if (!envelopes || envelopes.length < 1) {
    res.status(404).send("No envelopes found.")
  } else {
    res.send(envelopes)
  }
})

router.post("/", (req, res) => {
  if (!req.body?.title || !req.body?.budget) {
    res.status(400).send(req.body)
    return
  }

  const { title, budget } = req.body
  const newId = createId(envelopes)
  const newEnvelope = {
    id: newId,
    title,
    budget,
  }

  envelopes.push(newEnvelope)

  res.status(201).send(newEnvelope)
})

module.exports = router
