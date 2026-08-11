export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 w-full">
      {/* Date Overview */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">HARI INI</p>
          <h2 className="text-headline-sm font-headline-sm text-primary">24 Oktober 2023</h2>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-label-caps font-label-caps text-on-surface">Toko Buka</span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Total Orders Card */}
        <div className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <span className="material-symbols-outlined text-[64px]">receipt_long</span>
          </div>
          <p className="text-label-caps font-label-caps text-on-surface-variant mb-2">PESANAN BARU</p>
          <p className="text-display-lg font-display-lg text-primary">12</p>
          <div className="mt-4 flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-xs">+3 dari kemarin</span>
          </div>
        </div>

        {/* Ready to Handover Card */}
        <div className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform border border-outline-variant/30">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <span className="material-symbols-outlined text-[64px]">takeout_dining</span>
          </div>
          <p className="text-label-caps font-label-caps text-on-surface-variant mb-2">SIAP DIAMBIL</p>
          <p className="text-display-lg font-display-lg text-primary">4</p>
          <div className="mt-4 flex items-center gap-1 text-on-surface-variant">
            <span className="text-xs">Driver sedang jalan</span>
          </div>
        </div>
      </div>

      {/* Quick Actions (Floating Papers Style) */}
      <div className="space-y-4 pt-4">
        <h3 className="text-headline-sm font-headline-sm text-primary">Aksi Cepat</h3>
        
        <div className="grid grid-cols-1 gap-3 relative">
          {/* Add Menu Action */}
          <button className="w-full bg-surface-container-lowest rounded-radius-sm p-4 editorial-shadow-rest flex items-center justify-between hover:editorial-shadow-elevated transition-shadow border border-outline-variant/20 rotate-slight-right origin-left z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface">restaurant_menu</span>
              </div>
              <div className="text-left">
                <p className="text-body-md font-body-md font-medium text-on-surface">Update Stok Menu</p>
                <p className="text-xs text-on-surface-variant">Atur ketersediaan menu</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
          </button>

          {/* Laporan Action */}
          <button className="w-full bg-surface-container-lowest rounded-radius-sm p-4 editorial-shadow-rest flex items-center justify-between hover:editorial-shadow-elevated transition-shadow border border-outline-variant/20 rotate-slight-left origin-right z-0 mt-[-8px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface">bar_chart</span>
              </div>
              <div className="text-left">
                <p className="text-body-md font-body-md font-medium text-on-surface">Lihat Laporan</p>
                <p className="text-xs text-on-surface-variant">Penjualan hari ini</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
