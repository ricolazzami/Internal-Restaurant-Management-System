import type { Order } from '../domain/types'

type OrderCardProps = {
  order: Order
  onAccept?: (order: Order) => void
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)

const formatTime = (createdAt: string) =>
  new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(createdAt))

const sourceAccent = (source?: string) => {
  const normalized = source?.toLowerCase() ?? ''

  if (normalized.includes('gofood')) return 'bg-green-500'
  if (normalized.includes('shopee')) return 'bg-orange-500'

  return 'bg-primary'
}

export default function OrderCard({ order, onAccept }: OrderCardProps) {
  const sourceLabel = order.source ? `${order.source} • ${order.number}` : order.number

  return (
    <article aria-label={`Order ${order.number}`} className="overflow-hidden rounded-radius-default border border-outline-variant/20 bg-surface-container-lowest editorial-shadow-elevated">
      <div className={`h-1 w-full ${sourceAccent(order.source)}`} />

      <div className="space-y-4 p-padding-card">
        <header className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-2 inline-flex rounded-full bg-surface-container-high px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-on-surface">
              {sourceLabel}
            </p>
            <h3 className="text-headline-md font-headline-md leading-tight text-primary">
              {formatCurrency(order.total)}
            </h3>
          </div>

          <div className="text-right">
            <span className="mb-1 block text-label-caps font-label-caps text-on-surface-variant">
              MASUK
            </span>
            <time dateTime={order.createdAt} className="text-body-lg font-body-lg font-bold text-primary">
              {formatTime(order.createdAt)}
            </time>
          </div>
        </header>

        <div className="h-px w-full bg-outline-variant/30" />

        <ul className="space-y-3">
          {order.items.map((item) => (
            <li key={item.id} className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <span className="text-body-md font-body-md font-bold text-secondary">{item.qty}x</span>
                <div>
                  <p className="text-body-md font-body-md font-medium text-on-surface">{item.name}</p>
                  <p className="mt-0.5 text-sm text-on-surface-variant">{formatCurrency(item.price)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onAccept?.(order)}
            disabled={!onAccept}
            aria-label={`Accept order ${order.number}`}
            className="h-[48px] w-full rounded-radius-sm bg-primary text-label-caps font-label-caps font-bold text-on-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            TERIMA
          </button>
        </div>
      </div>
    </article>
  )
}
