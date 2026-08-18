# WarungPOS MVP (Web prototype) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

I'm using the writing-plans skill to create the implementation plan.

Goal: Create a testable React + Vite web prototype in the monorepo that implements the core Order UI and wiring for the first screen (mobile-first), plus a domain service and offline queue.

Architecture: Thin presentational components (React) + a typed domain layer (Order types + OrderService) + pluggable OrderAdapter (mock now, API later). Persistence for offline queue uses localStorage.

Tech Stack: React + Vite (apps/web), TypeScript, Tailwind (existing), Vitest + Testing Library for tests.

Spec: docs/superpowers/specs/2026-08-17-warungpos-mobile-design.md

## Global Constraints

- Target width: 393px mobile-first
- Use TypeScript for all new files and maintain consistent export names
- Tests must run with Vitest and use Testing Library for DOM assertions
- Commit messages use conventional style: `feat: ...`/`fix: ...`

---

### Task 0: Repo sanity & test runner setup

**Files:**
- Modify: `apps/web/package.json`
- Create: `apps/web/vitest.config.ts`

**Why:** Add Vitest and scripts so every subsequent task can add and run unit tests.

- [ ] Step 1: Add devDependencies and scripts to `apps/web/package.json`.

Replace or extend the "scripts" and "devDependencies" sections with the following snippets (ensure merging vs overwrite):

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest"
},
"devDependencies": {
  "vitest": "^1.0.0",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.0.0",
  "jsdom": "^22.0.0",
  "@types/testing-library__react": "^14.0.0"
}
```

- [ ] Step 2: Create `apps/web/vitest.config.ts` with minimal config:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts']
  }
})
```

- [ ] Step 3: Create `apps/web/src/setupTests.ts` to register jest-dom:

```ts
import '@testing-library/jest-dom'
```

- [ ] Step 4: Install dependencies from repo root (Windows):

Run: `npm --prefix apps/web install` or `cd apps/web && npm install`

- [ ] Step 5: Run a smoke test: `npm --prefix apps/web run test -- --passWithNoTests`.

Expected: test runner starts and exits 0.

Commit:

```
git add apps/web/package.json apps/web/vitest.config.ts apps/web/src/setupTests.ts
git commit -m "chore(test): add vitest and testing-library setup"
```

---

### Task 1: Domain types (Order model)

**Files:**
- Create: `apps/web/src/domain/types.ts`
- Test: `apps/web/src/domain/types.test.ts`

**Interfaces:**
- Produces: `Order`, `OrderItem`, `OrderStatus` types

- [ ] Step 1: Create `apps/web/src/domain/types.ts` with:

```ts
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
```

- [ ] Step 2: Add a simple unit test `apps/web/src/domain/types.test.ts`:

```ts
import { Order } from './types'

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
```

- [ ] Step 3: Run `npm --prefix apps/web run test apps/web/src/domain/types.test.ts` and expect PASS.

Commit:

```
git add apps/web/src/domain/types.ts apps/web/src/domain/types.test.ts
git commit -m "feat(domain): add Order types and basic tests"
```

---

### Task 2: Mock Order Adapter (pluggable source)

**Files:**
- Create: `apps/web/src/services/orderAdapter/mockOrderAdapter.ts`
- Test: `apps/web/src/services/orderAdapter/mockOrderAdapter.test.ts`

**Interfaces:**
- Consumes: `Order` types
- Produces: `getOrders(): Promise<Order[]>`, `subscribe(cb)` (simple polling/mocked websocket)

- [ ] Step 1: Create `mockOrderAdapter.ts`:

```ts
import { Order } from '../../domain/types'

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
```

- [ ] Step 2: Create a unit test that asserts `getOrders` returns an array.

```ts
import { mockOrderAdapter } from './mockOrderAdapter'

test('mock adapter returns orders', async () => {
  const list = await mockOrderAdapter.getOrders()
  expect(Array.isArray(list)).toBeTruthy()
  expect(list.length).toBeGreaterThan(0)
})
```

- [ ] Step 3: Run test and commit.

Commit:

```
git add apps/web/src/services/orderAdapter/mockOrderAdapter.ts apps/web/src/services/orderAdapter/mockOrderAdapter.test.ts
git commit -m "feat(adapter): add mock order adapter for dev"
```

---

### Task 3: OrderService (domain logic + in-memory cache)

**Files:**
- Create: `apps/web/src/services/orderService.ts`
- Test: `apps/web/src/services/orderService.test.ts`

**Interfaces:**
- Consumes: `mockOrderAdapter` (or future API adapter)
- Produces: `OrderService` with `start()`, `stop()`, `getAll()`, `accept(orderId)`

- [ ] Step 1: Minimal `orderService.ts` implementation:

```ts
import { Order } from '../domain/types'
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
```

- [ ] Step 2: Test `orderService` behavior:

```ts
import { OrderService } from './orderService'

test('start and accept', async () => {
  const s = new OrderService()
  await s.start()
  const all = s.getAll()
  expect(all.length).toBeGreaterThan(0)
  const o = s.accept(all[0].id)
  expect(o.status).toBe('accepted')
  s.stop()
})
```

- [ ] Step 3: Run tests and commit.

Commit:

```
git add apps/web/src/services/orderService.ts apps/web/src/services/orderService.test.ts
git commit -m "feat(service): add OrderService and tests"
```

---

### Task 4: OrderCard presentational component

**Files:**
- Create: `apps/web/src/components/OrderCard.tsx`
- Test: `apps/web/src/components/OrderCard.test.tsx`

**Interfaces:**
- Props: `order: Order`, `onAccept?: (id: string) => void`
- Produces: a small accessible card matching the HTML markup and design tokens

- [ ] Step 1: Implement `OrderCard.tsx`:

```tsx
import React from 'react'
import { Order } from '../domain/types'

export const OrderCard: React.FC<{ order: Order; onAccept?: (id: string) => void }> = ({ order, onAccept }) => {
  return (
    <article className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-lg">{order.number}</h3>
          <p className="text-sm text-gray-600">{order.items.length} items • {order.source}</p>
        </div>
        <div>
          <div className={`text-xs px-2 py-1 rounded ${order.status === 'pending' ? 'bg-yellow-100' : 'bg-gray-100'}`}>
            {order.status}
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="text-sm font-medium">Rp {order.total}</div>
        {onAccept && order.status === 'pending' && (
          <button className="ml-2 bg-amber-300 px-3 py-1 rounded" onClick={() => onAccept(order.id)}>Accept</button>
        )}
      </div>
    </article>
  )
}
```

- [ ] Step 2: Add DOM test `OrderCard.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { OrderCard } from './OrderCard'

const order = {
  id: 'o1',
  number: '#1',
  status: 'pending',
  items: [{ id: 'i1', name: 'Item', qty: 1, price: 10000 }],
  total: 10000,
  createdAt: new Date().toISOString(),
  source: 'Mock'
}

test('renders order number and total', () => {
  render(<OrderCard order={order} />)
  expect(screen.getByText('#1')).toBeInTheDocument()
  expect(screen.getByText(/Rp 10000/)).toBeInTheDocument()
})
```

- [ ] Step 3: Run tests and commit.

Commit:

```
git add apps/web/src/components/OrderCard.tsx apps/web/src/components/OrderCard.test.tsx
git commit -m "feat(ui): add OrderCard component and tests"
```

---

### Task 5: Wire Orders page to service and components

**Files:**
- Modify: `apps/web/src/pages/Orders.tsx` (or `apps/web/src/pages/orders/index.tsx` depending on project)

**Why:** Replace static HTML with live data from OrderService and OrderCard component.

- [ ] Step 1: Import OrderService and OrderCard at top of the Orders page and use React effect to start the service.

Patch example to include inside `Orders.tsx`:

```tsx
import React, { useEffect, useState } from 'react'
import { OrderService } from '../services/orderService'
import { OrderCard } from '../components/OrderCard'

const service = new OrderService()

export default function OrdersPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    let mounted = true
    service.start().then(() => {
      if (!mounted) return
      setOrders(service.getAll())
    })
    const i = setInterval(() => setOrders(service.getAll()), 500)
    return () => {
      mounted = false
      clearInterval(i)
      service.stop()
    }
  }, [])

  return (
    <main className="p-4">
      <div className="space-y-3">
        {orders.map((o) => (
          <OrderCard key={o.id} order={o} onAccept={(id) => { service.accept(id); setOrders([...service.getAll()]) }} />
        ))}
      </div>
    </main>
  )
}
```

- [ ] Step 2: Run app locally and check Orders page visually: `npm --prefix apps/web run dev` then open http://localhost:5173 (or the displayed port) and navigate to Orders.

- [ ] Step 3: Commit the page change.

```
git add apps/web/src/pages/Orders.tsx
git commit -m "feat(page): wire Orders page to OrderService and OrderCard"
```

---

### Task 6: OfflineQueue (local persistence + retry)

**Files:**
- Create: `apps/web/src/services/offlineQueue.ts`
- Test: `apps/web/src/services/offlineQueue.test.ts`

**Interfaces:**
- Produces: `enqueue(action: () => Promise<any>, meta)`, `processQueue()` & persistence to localStorage under `warungpos:queue`

- [ ] Step 1: Implement `offlineQueue.ts`:

```ts
type Queued = { id: string; type: string; payload: any }

export const OFFLINE_KEY = 'warungpos:queue'

export class OfflineQueue {
  private queue: Queued[] = []

  constructor() {
    const raw = localStorage.getItem(OFFLINE_KEY)
    this.queue = raw ? JSON.parse(raw) : []
  }

  private persist() {
    localStorage.setItem(OFFLINE_KEY, JSON.stringify(this.queue))
  }

  enqueue(item: Queued) {
    this.queue.push(item)
    this.persist()
  }

  async process(processor: (q: Queued) => Promise<void>) {
    const copy = [...this.queue]
    for (const item of copy) {
      try {
        await processor(item)
        this.queue = this.queue.filter((x) => x.id !== item.id)
        this.persist()
      } catch (err) {
        // stop on failure to retry later
        break
      }
    }
  }
}
```

- [ ] Step 2: Add tests that simulate enqueue and process with a fake processor.

- [ ] Step 3: Integrate into OrderService `accept()` to enqueue the accept action when navigator.onLine === false. Add tests for that behavior.

Commit:

```
git add apps/web/src/services/offlineQueue.ts apps/web/src/services/offlineQueue.test.ts apps/web/src/services/orderService.ts
git commit -m "feat(offline): add OfflineQueue and integrate with OrderService"
```

---

### Task 7: Vitest coverage / CI note

**Files:**
- Modify: `.github/workflows/ci.yml` (if present) or add a simple workflow to run unit tests for apps/web

- [ ] Step 1: Add a GitHub Actions workflow to run `npm --prefix apps/web run test` on push/PR. Keep it minimal.

Example snippet for `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install
        run: npm --prefix apps/web install
      - name: Run tests
        run: npm --prefix apps/web run test -- --coverage
```

Commit:

```
git add .github/workflows/ci.yml
git commit -m "ci(test): add basic vitest workflow for apps/web"
```

---

### Task 8: Developer docs and runbook

**Files:**
- Modify: `README.md` (repo root) or create `apps/web/DEV-SETUP.md`

- [ ] Step 1: Add short instructions for running the web prototype and tests.

Example `apps/web/DEV-SETUP.md` content:

```
# WarungPOS (apps/web) - Dev Setup

1. Install deps: `cd apps/web && npm install`
2. Run dev: `npm run dev`
3. Run tests: `npm run test`

Tip: tests run with Vitest (jsdom). Use VS Code Vitest extension for convenience.
```

Commit:

```
git add apps/web/DEV-SETUP.md
git commit -m "docs: add dev setup for apps/web"
```

---

## Self-Review

1. Spec coverage: This plan implements the Orders screen and core domain plumbing (adapter, service, offline queue). Remaining screens (Kitchen, Menu, More) should be split into separate plans following same pattern.

2. Placeholder scan: All steps include concrete code snippets and commands required to run tests. Where long files are obvious (component styles, expanded UI), the plan provides a minimal functional version that is testable.

3. Type consistency: Exports and names used here (`Order`, `OrderService`, `mockOrderAdapter`, `OfflineQueue`) are defined and referenced consistently across tasks.

---

Plan complete and saved to `docs/superpowers/plans/2026-08-17-warungpos-mvp-plan.md`.

Two execution options:

1. Subagent-Driven (recommended) - dispatch a fresh subagent per task and iterate fast.
2. Inline Execution - run tasks in this session step-by-step; suggest starting with Task 0.

Which approach do you want to use?