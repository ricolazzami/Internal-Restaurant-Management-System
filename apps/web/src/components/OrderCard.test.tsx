import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import OrderCard from './OrderCard'
import type { Order } from '../domain/types'

describe('OrderCard', () => {
  it('renders the order details and calls onAccept when clicked', () => {
    const order: Order = {
      id: 'o1',
      number: 'GF-1234',
      status: 'pending',
      source: 'GoFood',
      total: 85000,
      createdAt: '2025-01-14T14:32:00.000Z',
      items: [
        { id: 'i1', name: 'Ayam Penyet Surabaya', qty: 2, price: 35000 },
        { id: 'i2', name: 'Es Teh Manis', qty: 1, price: 15000 },
      ],
    }

    const onAccept = vi.fn()

    render(<OrderCard order={order} onAccept={onAccept} />)

    expect(screen.getByText('GoFood • GF-1234')).toBeInTheDocument()
    expect(screen.getByText('Ayam Penyet Surabaya')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept order GF-1234' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Accept order GF-1234' }))

    expect(onAccept).toHaveBeenCalledTimes(1)
    expect(onAccept).toHaveBeenCalledWith(order)
  })
})
