import { rules } from './rules.js'

class FuzzyTriangle {
  constructor (min, max) {
    this.min = min
    this.max = max
  }

  getPertenencia (value) {
    const mid = (this.min + this.max) / 2
    if (value <= this.min || value >= this.max) return 0
    else if (value === mid) return 1
    else if (value < mid) return (value - this.min) / (mid - this.min)
    else if (value > mid) return (this.max - value) / (this.max - mid)
  }

  getValue () {
    return (this.min + this.max) / 2
  }
}

class FuzzyGaussian {
  constructor (min, max) {
    this.min = min
    this.max = max
  }

  getPertenencia (value) {
    const mid = (this.min + this.max) / 2
    const sigma = (this.max - this.min) / 6
    return Math.exp(-Math.pow(value - mid, 2) / (2 * Math.pow(sigma, 2)))
  }
}

const fuzzy = {
  error: {
    NB: new FuzzyGaussian(-1.7, -0.3),
    NS: new FuzzyGaussian(-1.2, 0.2),
    ZE: new FuzzyGaussian(-0.7, 0.7),
    SP: new FuzzyGaussian(-0.2, 1.2),
    BP: new FuzzyGaussian(0.3, 1.7)
  },
  derivatedError: {
    NB: new FuzzyGaussian(-0.17, -0.03),
    NS: new FuzzyGaussian(-0.12, 0.02),
    ZE: new FuzzyGaussian(-0.07, 0.07),
    SP: new FuzzyGaussian(-0.02, 0.12),
    BP: new FuzzyGaussian(0.03, 0.17)
  },
  output: {
    KP: {
      S: new FuzzyTriangle(-2.5, 3.5),
      MS: new FuzzyTriangle(-1, 6),
      M: new FuzzyTriangle(1.5, 8.5),
      MB: new FuzzyTriangle(4, 11),
      B: new FuzzyTriangle(6.5, 13.5)
    },
    KI: {
      S: new FuzzyTriangle(-0.0175, 0.0175),
      MS: new FuzzyTriangle(-0.005, 0.03),
      M: new FuzzyTriangle(0.0075, 0.0425),
      MB: new FuzzyTriangle(0.02, 0.055),
      B: new FuzzyTriangle(0.0325, 0.0675)
    },
    KD: {
      S: new FuzzyTriangle(-0.005, 0.005),
      MS: new FuzzyTriangle(-0.0025, 0.0075),
      M: new FuzzyTriangle(-0.002, 0.012),
      MB: new FuzzyTriangle(0.005, 0.015),
      B: new FuzzyTriangle(0.0075, 0.0175)
    }
  }
}

const getError = (value) => {
  const error = []
  Object.keys(fuzzy.error).forEach(key => {
    error[key] = fuzzy.error[key].getPertenencia(value)
  })
  if (value < -1.7) error.NB = 1
  else if (value > 1.7) error.BP = 1
  const max = Math.max(error.NB, error.NS, error.ZE, error.SP, error.BP)
  return Object.keys(error).find(key => error[key] === max)
}

const getDerivatedError = (value) => {
  const derivatedError = []
  Object.keys(fuzzy.derivatedError).forEach(key => {
    derivatedError[key] = fuzzy.derivatedError[key].getPertenencia(value)
  }
  )
  if (value < -0.17) derivatedError.NB = 1
  else if (value > 0.17) derivatedError.BP = 1
  const max = Math.max(derivatedError.NB, derivatedError.NS, derivatedError.ZE, derivatedError.SP, derivatedError.BP)
  return Object.keys(derivatedError).find(key => derivatedError[key] === max)
}

const getOutput = (error, derivatedError) => {
  let outputResult = ''
  const constants = {
    KP: 0,
    KI: 0,
    KD: 0
  }
  rules.forEach(rule => {
    if (rule.error === getError(error) && rule.derivatedError === getDerivatedError(derivatedError)) {
      outputResult = rule.output
    }
  })
  Object.keys(fuzzy.output).forEach(key => {
    constants[key] = fuzzy.output[key][outputResult].getValue()
  })
  return constants
}

export { getError, getDerivatedError, getOutput }
