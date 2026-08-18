export type OrderStatus = 'pending' | 'accepted' | 'preparing' | 'done' | 'cancelled'

export interface OrderItem {
  id: string
  name: string
  qty: number
  price: number
}

export interface Order {
  id: string
  number: string
  status: OrderStatus
  items: OrderItem[]
  total: number
  createdAt: string // ISO
  source?: string // e.g., GoFood
}
