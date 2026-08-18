import type { Order } from './types'

test('order type basic shape', () => {
  const o: Order = {
    id: 'o1',
    number: '#1',
    status: 'pending',
    items: [{ id: 'i1', name: 'Nasi', qty: 2, price: 10000 }],
    total: 20000,
    createdAt: new Date().toISOString()
  }

  expect(o.items.length).toBe(1)
  expect(o.total).toBe(20000)
})
