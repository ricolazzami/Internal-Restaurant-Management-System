import { beforeEach, describe, expect, it, vi } from 'vitest'
import { OfflineQueue, OFFLINE_KEY, type QueuedItem } from './offlineQueue'

describe('OfflineQueue', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('persists queued items and restores them from localStorage', () => {
    const queue = new OfflineQueue()
    const item: Omit<QueuedItem<{ orderId: string }>, 'createdAt'> = {
      id: 'order-1',
      type: 'accept-order',
      payload: { orderId: 'abc-123' }
    }

    queue.enqueue(item)

    expect(JSON.parse(localStorage.getItem(OFFLINE_KEY) ?? '[]')).toHaveLength(1)
    expect(new OfflineQueue().getAll()).toEqual([
      expect.objectContaining({
        id: item.id,
        type: item.type,
        payload: item.payload
      })
    ])
  })

  it('retries pending items with the provided processor until it fails', async () => {
    const queue = new OfflineQueue()
    const first: Omit<QueuedItem<{ orderId: string }>, 'createdAt'> = {
      id: 'order-1',
      type: 'accept-order',
      payload: { orderId: 'order-1' }
    }
    const second: Omit<QueuedItem<{ orderId: string }>, 'createdAt'> = {
      id: 'order-2',
      type: 'accept-order',
      payload: { orderId: 'order-2' }
    }

    queue.enqueue(first)
    queue.enqueue(second)

    const processor = vi.fn(async (entry: QueuedItem) => {
      if (entry.id === 'order-2') {
        throw new Error('still offline')
      }
    })

    const remaining = await queue.process(processor)

    expect(processor).toHaveBeenCalledTimes(2)
    expect(remaining).toEqual([
      expect.objectContaining({
        id: 'order-2',
        type: 'accept-order'
      })
    ])
    expect(JSON.parse(localStorage.getItem(OFFLINE_KEY) ?? '[]')).toEqual([
      expect.objectContaining({ id: 'order-2' })
    ])
  })
})
