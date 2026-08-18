export const OFFLINE_KEY = 'warungpos:queue'

export type QueuedItem<T = unknown> = {
  id: string
  type: string
  payload: T
  createdAt: string
}

export class OfflineQueue {
  private queue: QueuedItem[] = []

  constructor() {
    this.queue = this.loadQueue()
  }

  private loadQueue(): QueuedItem[] {
    if (typeof localStorage === 'undefined') return []

    try {
      const raw = localStorage.getItem(OFFLINE_KEY)
      if (!raw) return []

      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }

  private persist() {
    if (typeof localStorage === 'undefined') return

    try {
      localStorage.setItem(OFFLINE_KEY, JSON.stringify(this.queue))
    } catch {
      // ignore persistence failures in offline mode
    }
  }

  getAll() {
    return [...this.queue]
  }

  enqueue<T>(item: Omit<QueuedItem<T>, 'createdAt'>): QueuedItem<T> {
    const queuedItem: QueuedItem<T> = {
      ...item,
      createdAt: new Date().toISOString()
    }

    this.queue = [...this.queue, queuedItem]
    this.persist()
    return queuedItem
  }

  async process(processor: (item: QueuedItem) => Promise<void> | void) {
    const snapshot = [...this.queue]

    for (const item of snapshot) {
      try {
        await processor(item)
        this.queue = this.queue.filter((queued) => queued.id !== item.id)
        this.persist()
      } catch {
        break
      }
    }

    return this.getAll()
  }
}

export async function processQueue(
  queue: OfflineQueue,
  processor: (item: QueuedItem) => Promise<void> | void
) {
  return queue.process(processor)
}
