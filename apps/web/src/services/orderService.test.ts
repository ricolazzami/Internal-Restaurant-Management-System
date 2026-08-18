import { OrderService } from './orderService'

test('start loads orders and accept updates status', async () => {
  const service = new OrderService()

  await service.start()

  const all = service.getAll()
  expect(all.length).toBeGreaterThan(0)

  const order = service.accept(all[0].id)
  expect(order.status).toBe('accepted')

  service.stop()
})
