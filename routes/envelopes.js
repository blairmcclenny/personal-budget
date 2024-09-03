const express = require("express")
const router = express.Router()

const dbEnvelopes = require("../config/db")
const { createId, findById, deleteById } = require("../utils")

router.get("/", async (req, res) => {
  try {
    const envelopes = await dbEnvelopes
    res.status(200).send(envelopes)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post("/", async (req, res) => {
  try {
    const { title, budget } = req.body
    const envelopes = await dbEnvelopes
    const newId = createId(envelopes)
    const newEnvelope = {
      id: newId,
      title,
      budget,
    }

    envelopes.push(newEnvelope)
    res.status(201).send(newEnvelope)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const envelopes = await dbEnvelopes
    const envelope = findById(envelopes, id)

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      })
    }

    res.status(200).send(envelope)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { title, budget } = req.body
    const { id } = req.params
    const envelopes = await dbEnvelopes
    const envelope = findById(envelopes, id)

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      })
    }

    envelope.title = title
    envelope.budget = budget
    res.status(201).send(envelopes)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const envelopes = await dbEnvelopes
    const envelope = findById(envelopes, id)

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      })
    }

    const updatedEnvelopes = deleteById(envelopes, id)
    res.status(204).send(updatedEnvelopes)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post("/:fromId/transfer/:toId", async (req, res) => {
  try {
    const envelopes = await dbEnvelopes
    const { fromId, toId } = req.params
    const { amount } = req.body

    const originEnv = findById(envelopes, fromId)
    const destinationEnv = findById(envelopes, toId)

    if (!originEnv || !destinationEnv) {
      return res.status(404).send({
        message: "Envelope Not Found",
      })
    }

    if (originEnv.budget < amount) {
      return res.status(400).send({
        message: "Amount to transfer exceeds envelope budget funds",
      })
    }

    originEnv.budget -= amount
    destinationEnv.budget += amount

    res.status(201).send(originEnv)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
