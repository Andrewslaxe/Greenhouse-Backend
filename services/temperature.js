import { temperatureDB, idealTemperatureDB } from '../DBTemporal/temperature.js'
import { getOutput } from '../helpers/fuzzy.js'

let data = null
let idealTemperature = null

if (!data) {
  data = temperatureDB
}

if (!idealTemperature) {
  idealTemperature = idealTemperatureDB
}

async function getAllTemperature () {
  return data
}

async function getIdealTemperature () {
  return idealTemperature
}

async function getTemperatureByDate (date) {
  return data.filter(d => d.date === date)
}

async function getTemperatureBySensor (sensorId) {
  return data.filter(d => d.sensorID === sensorId)
}

async function postTemperature ({ value, sensorId }) {
  data.push({ date: new Date(), value, sensorID: sensorId })
  return data
}

async function getCalentador () {
  const currentTemperature = data[data.length - 1].value
  const idealTemp = idealTemperature.value
  const errorValue = idealTemp - currentTemperature
  const derivatedError = (data[data.length - 2].value - currentTemperature) / 10
  const { KP, KI, KD } = getOutput(errorValue, derivatedError)
  const output = KP * errorValue + KI * errorValue + KD * derivatedError
  return { output, KP, KI, KD }
}

async function updateIdealTemperature (value) {
  idealTemperature = value
}

export default {
  updateIdealTemperature,
  getCalentador,
  getAllTemperature,
  getIdealTemperature,
  getTemperatureByDate,
  getTemperatureBySensor,
  postTemperature
}
