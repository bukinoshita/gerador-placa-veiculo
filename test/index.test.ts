import { geradorPlacaVeiculo } from '../source'

test('random placa de veiculo', () => {
  const random = geradorPlacaVeiculo

  let current: string
  let previous: string | undefined
  let i = 100

  while (i--) {
    current = random()
    expect(current.length).toBe(7)
    expect(current).not.toBe(previous)
    previous = current
  }
})
