import uniqueRandomArray from 'unique-random-array'
import { ALPHABET } from './utils/constants'

export const geradorPlacaVeiculo = () => {
  const letter = uniqueRandomArray(ALPHABET)
  const number = () => Math.floor(Math.random() * 9)
  const placa = `${letter()}${letter()}${letter()}${number()}${letter()}${number()}${number()}`

  return placa
}
