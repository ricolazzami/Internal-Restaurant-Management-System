export default function Orders() {
  return (
    <div className="space-y-6 w-full">
      {/* Filters (Status) */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        <button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-on-primary text-label-caps font-label-caps tracking-wider transition-colors">SEMUA</button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">BARU (3)</button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">DIMASAK</button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">SIAP</button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">SELESAI</button>
      </div>

      {/* Order List */}
      <div className="space-y-6">
        {/* GoFood Order (Baru) */}
        <article className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated overflow-hidden border border-outline-variant/20 relative">
          {/* Top color strip for platform */}
          <div className="h-1 w-full bg-green-500"></div>
          
          <div className="p-padding-card space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded-full mb-2 uppercase tracking-wider">GoFood • GF-1234</span>
                <h3 className="text-headline-md font-headline-md text-primary leading-tight">Rp 85.000</h3>
              </div>
              <div className="text-right">
                <span className="text-label-caps font-label-caps text-on-surface-variant block mb-1">MASUK</span>
                <span className="text-body-lg font-body-lg text-primary font-bold">14:32</span>
                <p className="text-xs text-error mt-1 flex items-center justify-end gap-1 font-medium animate-pulse">
                  <span className="material-symbols-outlined text-[14px]">timer</span>
                  5m waiting
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-outline-variant/30"></div>

            <ul className="space-y-3">
              <li className="flex justify-between items-start">
                <div className="flex gap-3">
                  <span className="text-body-md font-body-md font-bold text-secondary">2x</span>
                  <div>
                    <p className="text-body-md font-body-md text-on-surface font-medium">Ayam Penyet Surabaya</p>
                    <p className="text-sm text-on-surface-variant italic mt-0.5">+ Nasi Uduk</p>
                    <p className="text-sm text-error mt-0.5">• Paha Atas, Sambal Pisah</p>
                  </div>
                </div>
              </li>
              <li className="flex justify-between items-start">
                <div className="flex gap-3">
                  <span className="text-body-md font-body-md font-bold text-secondary">1x</span>
                  <div>
                    <p className="text-body-md font-body-md text-on-surface font-medium">Es Teh Manis</p>
                    <p className="text-sm text-on-surface-variant italic mt-0.5">Es Sedikit</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="pt-2 flex gap-3">
              <button className="flex-1 border border-outline-variant text-on-surface h-[48px] rounded-radius-sm text-label-caps font-label-caps font-bold hover:bg-surface-container-high transition-colors">
                TOLAK
              </button>
              <button className="flex-1 bg-primary text-on-primary h-[48px] rounded-radius-sm text-label-caps font-label-caps font-bold hover:opacity-90 transition-opacity">
                TERIMA
              </button>
            </div>
          </div>
        </article>

        {/* ShopeeFood Order (Dimasak) */}
        <article className="bg-surface-container-lowest rounded-radius-default editorial-shadow-rest overflow-hidden border border-outline-variant/20 relative opacity-90">
          <div className="h-1 w-full bg-orange-500"></div>
          <div className="p-padding-card space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-[10px] font-bold rounded-full mb-2 uppercase tracking-wider">ShopeeFood • SF-9982</span>
                <h3 className="text-headline-md font-headline-md text-primary leading-tight">Rp 42.000</h3>
              </div>
              <div className="text-right">
                <span className="text-label-caps font-label-caps text-on-surface-variant block mb-1">STATUS</span>
                <span className="text-body-lg font-body-lg text-primary font-bold">Dimasak</span>
              </div>
            </div>

            <div className="h-px w-full bg-outline-variant/30"></div>

            <ul className="space-y-3">
              <li className="flex justify-between items-start">
                <div className="flex gap-3">
                  <span className="text-body-md font-body-md font-bold text-secondary">1x</span>
                  <div>
                    <p className="text-body-md font-body-md text-on-surface font-medium">Lele Goreng Crispy</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <button className="w-full bg-surface-container-high text-primary h-[48px] rounded-radius-sm text-label-caps font-label-caps font-bold hover:bg-surface-dim transition-colors">
                PESANAN SIAP
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
