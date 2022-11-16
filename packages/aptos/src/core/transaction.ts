export interface ITranactionPayload {
  function: string
  type_arguments: string[]
  arguments: string[]
}

export interface ITranactionOptions {
  max_gas_amount?: number
  gas_unit_price?: number
  expiration_timestamp_secs?: number
  sequence_number?: number
}

export interface ITranaction {
  hash: string
}
