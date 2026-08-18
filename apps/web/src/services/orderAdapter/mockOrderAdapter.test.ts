import { mockOrderAdapter } from './mockOrderAdapter'

test('mock adapter returns orders', async () => {
  const list = await mockOrderAdapter.getOrders()
  expect(Array.isArray(list)).toBeTruthy()
  expect(list.length).toBeGreaterThan(0)
})
