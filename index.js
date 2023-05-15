import express from 'express'
import cors from 'cors'

import temperature from './services/temperature.js'
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/temperature/ideal', (req, res) => {
  temperature.getIdealTemperature().then(data => { res.json(data) })
})

app.get('/api/temperature', (req, res) => {
  temperature.getAllTemperature().then(data => { res.json(data) })
})

app.get('/api/temperature/:date', (req, res) => {
  temperature.getTemperatureByDate(req.params.date).then(data => { res.json(data) })
})

app.get('/api/temperature/sensor/:sensorId', (req, res) => {
  temperature.getTemperatureBySensor(req.params.sensorId).then(data => { res.json(data) })
})

app.post('/api/temperature', (req, res) => {
  temperature.postTemperature(req.body).then(data => { res.json(data) })
})

app.put('/api/temperature/ideal', (req, res) => {
  temperature.updateIdealTemperature(req.body).then(data => { res.json(data) })
})

app.get('/api/calentador', (req, res) => {
  temperature.getCalentador().then(data => { res.json(data) })
})

app.get('/api/ventilador', (req, res) => {
  temperature.getVentilador().then(data => { res.json(data) })
})

app.put('/api/calentador', (req, res) => {
  temperature.updateCalentador(req.body).then(data => { res.json(data) })
})

app.put('/api/ventilador', (req, res) => {
  temperature.updateVentilador(req.body).then(data => { res.json(data) })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
