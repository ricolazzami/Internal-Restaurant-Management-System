import type { Order } from '../domain/types'
import { mockOrderAdapter } from './orderAdapter/mockOrderAdapter'

export class OrderService {
  private orders: Order[] = []
  private unsubscribe: (() => void) | null = null

  async start() {
    this.orders = await mockOrderAdapter.getOrders()
    this.unsubscribe = mockOrderAdapter.subscribe((list) => {
      this.orders = list
    })
  }

  stop() {
    if (this.unsubscribe) this.unsubscribe()
  }

  getAll() {
    return this.orders
  }

  accept(orderId: string) {
    const o = this.orders.find((x) => x.id === orderId)
    if (!o) throw new Error('not found')
    o.status = 'accepted'
    return o
  }
}
