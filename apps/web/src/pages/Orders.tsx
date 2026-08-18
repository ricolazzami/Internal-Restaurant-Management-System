import { useEffect, useRef, useState } from 'react'

import OrderCard from '../components/OrderCard'
import type { Order } from '../domain/types'
import { OrderService } from '../services/orderService'

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const serviceRef = useRef<OrderService | null>(null)

  useEffect(() => {
    const service = new OrderService()
    serviceRef.current = service

    let isActive = true

    service.start().then(() => {
      if (!isActive) return
      setOrders([...service.getAll()])
    })

    return () => {
      isActive = false
      service.stop()
    }
  }, [])

  const handleAccept = (order: Order) => {
    const service = serviceRef.current
    if (!service) return

    service.accept(order.id)
    setOrders([...service.getAll()])
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        <button className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-label-caps font-label-caps tracking-wider text-on-primary transition-colors">
          SEMUA
        </button>
        <button className="whitespace-nowrap rounded-full border border-outline-variant px-4 py-2 text-label-caps font-label-caps tracking-wider text-on-surface transition-colors hover:bg-surface-container-high">
          BARU (3)
        </button>
        <button className="whitespace-nowrap rounded-full border border-outline-variant px-4 py-2 text-label-caps font-label-caps tracking-wider text-on-surface transition-colors hover:bg-surface-container-high">
          DIMASAK
        </button>
        <button className="whitespace-nowrap rounded-full border border-outline-variant px-4 py-2 text-label-caps font-label-caps tracking-wider text-on-surface transition-colors hover:bg-surface-container-high">
          SIAP
        </button>
        <button className="whitespace-nowrap rounded-full border border-outline-variant px-4 py-2 text-label-caps font-label-caps tracking-wider text-on-surface transition-colors hover:bg-surface-container-high">
          SELESAI
        </button>
      </div>

      <div className="space-y-6">
        {orders.length === 0 ? (
          <div className="rounded-radius-default border border-dashed border-outline-variant bg-surface-container-lowest p-padding-card text-body-md font-body-md text-on-surface-variant">
            No orders available.
          </div>
        ) : (
          orders.map((order) => (
            <OrderCard key={order.id} order={order} onAccept={handleAccept} />
          ))
        )}
      </div>
    </div>
  )
}
