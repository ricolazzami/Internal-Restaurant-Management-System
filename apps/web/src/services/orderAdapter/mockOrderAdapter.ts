import type { Order } from '../../domain/types'

let orders: Order[] = [
  {
    id: 'o1',
    number: '#101',
    status: 'pending',
    items: [{ id: 'i1', name: 'Nasi Goreng', qty: 1, price: 15000 }],
    total: 15000,
    createdAt: new Date().toISOString(),
    source: 'Mock'
  }
]

export const mockOrderAdapter = {
  async getOrders(): Promise<Order[]> {
    // emulate network
    await new Promise((r) => setTimeout(r, 10))
    return orders
  },

  // simple subscribe for dev: cb(orders)
  subscribe(cb: (orders: Order[]) => void) {
    const id = setInterval(async () => {
      cb(orders)
    }, 1000)
    return () => clearInterval(id)
  }
}
