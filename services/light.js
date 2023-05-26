import { lightDB, idealLightDB } from '../DBTemporal/light.js'
import { getOutput } from '../helpers/fuzzy.js'

let data = null
let idealLight = null

if (!data) {
  data = lightDB
}

if (!idealLight) {
  idealLight = idealLightDB
}

async function getAllLight (req, res) {
  return data
}

async function getIdealLight (req, res) {
  return idealLight
}

async function getLightByDate (date) {
  return data.filter(d => d.date === date)
}

async function getLightBySensor (sensorId) {
  return data.filter(d => d.sensorID === sensorId)
}

async function postLight ({ sensor1, sensor2 }) {
  const value = (sensor1 + sensor2) / 2
  data.push({ date: new Date(), value })
  return data
}

async function getLightOutput (req, res) {
  const currentLight = data[data.length - 1].value
  const idealLgt = idealLight.value
  const errorValue = idealLgt - currentLight
  const derivatedError = (data[data.length - 2].value - currentLight) / 10
  const { KP, KI, KD } = getOutput(errorValue, derivatedError)
  const output = KP * errorValue + KI * errorValue + KD * derivatedError
  return { output, KP, KI, KD }
}

async function updateIdealTemperature (value) {
  idealLight = value
}

export default {
  getAllLight,
  getIdealLight,
  getLightByDate,
  getLightBySensor,
  postLight,
  getLightOutput,
  updateIdealTemperature
}
