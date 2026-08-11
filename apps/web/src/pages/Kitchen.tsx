export default function Kitchen() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-headline-md font-headline-md text-primary">Antrean Dapur</h2>
        <span className="text-label-caps font-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">3 AKTIF</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ticket 1: Urgent */}
        <article className="bg-surface-container-lowest rounded-radius-default editorial-shadow-flying p-padding-card border-l-4 border-error rotate-slight-right origin-bottom-left transition-transform hover:rotate-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-label-caps font-label-caps text-on-surface-variant block mb-1">GF-1234 • BUNGKUS</span>
              <h3 className="text-headline-sm font-headline-sm text-primary">14:32</h3>
            </div>
            <div className="bg-error-container text-on-error-container px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
              <span className="material-symbols-outlined text-[16px]">timer</span>
              <span className="text-label-caps font-label-caps font-bold">12m</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-surface p-3 rounded-radius-sm">
              <span className="text-price-display font-price-display text-primary">2x</span>
              <div>
                <p className="text-body-lg font-body-lg font-medium text-primary leading-tight">Ayam Penyet</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="inline-block px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded">PAHA ATAS</span>
                  <span className="inline-block px-2 py-0.5 bg-error/10 text-error text-[10px] font-bold rounded border border-error/20">SAMBAL PISAH</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start px-3 py-2">
              <span className="text-price-display font-price-display text-primary">1x</span>
              <p className="text-body-lg font-body-lg font-medium text-primary leading-tight">Nasi Putih</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-primary text-on-primary h-[56px] rounded-radius-sm text-body-lg font-body-lg font-bold flex items-center justify-center gap-2 hover:bg-inverse-surface transition-colors">
            <span className="material-symbols-outlined">done_all</span>
            SELESAI MASAK
          </button>
        </article>

        {/* Ticket 2: Normal */}
        <article className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated p-padding-card border-l-4 border-primary-fixed-dim rotate-slight-left origin-bottom-right transition-transform hover:rotate-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-label-caps font-label-caps text-on-surface-variant block mb-1">DINE IN • MEJA 4</span>
              <h3 className="text-headline-sm font-headline-sm text-primary">14:40</h3>
            </div>
            <div className="bg-surface-container-high text-on-surface px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span className="text-label-caps font-label-caps font-bold">4m</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-surface p-3 rounded-radius-sm">
              <span className="text-price-display font-price-display text-primary">1x</span>
              <div>
                <p className="text-body-lg font-body-lg font-medium text-primary leading-tight">Lele Goreng</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="inline-block px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded">KREMES</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start px-3 py-2">
              <span className="text-price-display font-price-display text-primary">2x</span>
              <p className="text-body-lg font-body-lg font-medium text-primary leading-tight">Es Teh Manis</p>
            </div>
          </div>
          <button className="w-full mt-6 border-2 border-primary text-primary h-[56px] rounded-radius-sm text-body-lg font-body-lg font-bold flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">done</span>
            TANDAI SELESAI
          </button>
        </article>
      </div>
    </div>
  );
}
