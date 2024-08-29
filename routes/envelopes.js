const express = require("express")
const router = express.Router()

const envelopes = require("../config/db")
const { createId, findById } = require("../utils")

router.param("envelopeId", (req, res, next, id) => {
  const envelope = findById(envelopes, id)

  if (!envelope) {
    res.status(404).send("Envelope not found")
  } else {
    req.envelope = envelope
    next()
  }
})

router.get("/", (req, res) => {
  if (!envelopes || envelopes.length < 1) {
    res.status(404).send("No envelopes found.")
  } else {
    res.send(envelopes)
  }
})

router.post("/", (req, res) => {
  if (!req.body?.title || !req.body?.budget) {
    res.status(400).send("A valid title and budget are required")
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

router.get("/:envelopeId", (req, res) => {
  res.send(req.envelope)
})

module.exports = router
