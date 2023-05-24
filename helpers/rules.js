const MEMBERSHIP = {
  NB: 'NB',
  NS: 'NS',
  ZE: 'ZE',
  SP: 'SP',
  BP: 'BP'
}

const MEMBERSHIP_OUTPUT = {
  S: 'S',
  MS: 'MS',
  M: 'M',
  MB: 'MB',
  B: 'B'
}

const rules = [
  {
    error: MEMBERSHIP.NB,
    derivatedError: MEMBERSHIP.NB,
    output: MEMBERSHIP_OUTPUT.S
  },
  {
    error: MEMBERSHIP.NB,
    derivatedError: MEMBERSHIP.NS,
    output: MEMBERSHIP_OUTPUT.S
  },
  {
    error: MEMBERSHIP.NB,
    derivatedError: MEMBERSHIP.ZE,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.NB,
    derivatedError: MEMBERSHIP.SP,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.NB,
    derivatedError: MEMBERSHIP.BP,
    output: MEMBERSHIP_OUTPUT.M
  },
  {
    error: MEMBERSHIP.NS,
    derivatedError: MEMBERSHIP.NB,
    output: MEMBERSHIP_OUTPUT.S
  },
  {
    error: MEMBERSHIP.NS,
    derivatedError: MEMBERSHIP.NS,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.NS,
    derivatedError: MEMBERSHIP.ZE,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.NS,
    derivatedError: MEMBERSHIP.SP,
    output: MEMBERSHIP_OUTPUT.M
  },
  {
    error: MEMBERSHIP.NS,
    derivatedError: MEMBERSHIP.BP,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.ZE,
    derivatedError: MEMBERSHIP.NB,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.ZE,
    derivatedError: MEMBERSHIP.NS,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.ZE,
    derivatedError: MEMBERSHIP.ZE,
    output: MEMBERSHIP_OUTPUT.M
  },
  {
    error: MEMBERSHIP.ZE,
    derivatedError: MEMBERSHIP.SP,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.ZE,
    derivatedError: MEMBERSHIP.BP,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.SP,
    derivatedError: MEMBERSHIP.NB,
    output: MEMBERSHIP_OUTPUT.MS
  },
  {
    error: MEMBERSHIP.SP,
    derivatedError: MEMBERSHIP.NS,
    output: MEMBERSHIP_OUTPUT.M
  },
  {
    error: MEMBERSHIP.SP,
    derivatedError: MEMBERSHIP.ZE,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.SP,
    derivatedError: MEMBERSHIP.SP,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.SP,
    derivatedError: MEMBERSHIP.BP,
    output: MEMBERSHIP_OUTPUT.B
  },
  {
    error: MEMBERSHIP.BP,
    derivatedError: MEMBERSHIP.NB,
    output: MEMBERSHIP_OUTPUT.M
  },
  {
    error: MEMBERSHIP.BP,
    derivatedError: MEMBERSHIP.NS,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.BP,
    derivatedError: MEMBERSHIP.ZE,
    output: MEMBERSHIP_OUTPUT.MB
  },
  {
    error: MEMBERSHIP.BP,
    derivatedError: MEMBERSHIP.SP,
    output: MEMBERSHIP_OUTPUT.B
  },
  {
    error: MEMBERSHIP.BP,
    derivatedError: MEMBERSHIP.BP,
    output: MEMBERSHIP_OUTPUT.B
  }
]

export { rules }
