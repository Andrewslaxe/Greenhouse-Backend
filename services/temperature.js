import temperatureDB from '../DBTemporal/temperature.json' assert {type: 'json'}

let data = null
if (!data) {
  data = temperatureDB
}

async function getAllTemperature () {
  return data
}

async function getTemperatureByDate (date) {
  return data.filter(d => d.date === date)
}

async function getTemperatureBySensor (sensorId) {
  return data.filter(d => d.sensorID === sensorId)
}

async function postTemperature ({ temperature, sensorId }) {
  data.push({ date: new Date(), temperature: temperature, sensorID: sensorId })
  return data
}

export default { getAllTemperature, getTemperatureByDate, getTemperatureBySensor, postTemperature }
