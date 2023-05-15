import { temperatureDB, idealTemperatureDB, calentador, ventilador } from '../DBTemporal/temperature.js'

let data = null
let idealTemperature = null
let calentadorData = null
let ventiladorData = null

if (!data) {
  data = temperatureDB
}

if (!idealTemperature) {
  idealTemperature = idealTemperatureDB
}

if (!calentadorData) {
  calentadorData = calentador
}

if (!ventiladorData) {
  ventiladorData = ventilador
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
  return calentadorData
}

async function getVentilador () {
  return ventiladorData
}

async function updateCalentador (value) {
  calentadorData = value
}

async function updateVentilador (value) {
  ventiladorData = value
}

async function updateIdealTemperature (value) {
  idealTemperature = value
}

export default {
  updateCalentador,
  updateVentilador,
  updateIdealTemperature,
  getCalentador,
  getVentilador,
  getAllTemperature,
  getIdealTemperature,
  getTemperatureByDate,
  getTemperatureBySensor,
  postTemperature
}
