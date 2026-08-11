export default function More() {
  return (
    <div className="space-y-8 w-full relative">
      {/* Section 1: Laporan Penjualan (Sales Report) */}
      <section className="space-y-4 relative">
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-headline-sm font-headline-sm text-on-surface">Laporan Penjualan</h2>
          <button className="flex items-center gap-2 bg-[#EDE8E2] px-3 py-1.5 rounded-radius-sm text-label-caps font-label-caps text-on-surface hover:bg-surface-dim transition-colors">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Hari Ini, 24 Okt
          </button>
        </div>
        
        <div className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated p-padding-card border-t-4 border-primary">
          <div className="mb-6">
            <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">TOTAL PENDAPATAN</p>
            <p className="text-display-lg font-display-lg text-primary tracking-tight">Rp 2.450.000</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-radius-sm editorial-shadow-rest border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-label-caps font-label-caps text-on-surface">GoFood</span>
              </div>
              <p className="text-price-display font-price-display text-on-surface">Rp 1.200.000</p>
              <p className="text-xs text-on-surface-variant mt-1">15 Orders</p>
            </div>
            
            <div className="bg-surface p-4 rounded-radius-sm editorial-shadow-rest border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-label-caps font-label-caps text-on-surface">ShopeeFood</span>
              </div>
              <p className="text-price-display font-price-display text-on-surface">Rp 850.000</p>
              <p className="text-xs text-on-surface-variant mt-1">12 Orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Driver & Pickup */}
      <section className="space-y-4">
        <h2 className="text-headline-sm font-headline-sm text-on-surface">Driver &amp; Pickup</h2>
        <div className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated p-padding-card rotate-slight-right border border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded-full mb-2 uppercase tracking-wider">Ready to Handover</span>
              <h3 className="text-headline-md font-headline-md text-primary">GF-1234</h3>
            </div>
            <div className="text-right">
              <p className="text-label-caps font-label-caps text-on-surface-variant">PIN VERIFIKASI</p>
              <p className="text-price-display font-price-display text-primary tracking-widest">8842</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-6 bg-surface p-3 rounded-radius-sm">
            <div className="w-12 h-12 rounded-full bg-surface-dim flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined text-[24px]">motorcycle</span>
            </div>
            <div>
              <p className="text-body-md font-body-md font-medium text-on-surface">Budi Santoso</p>
              <p className="text-sm text-on-surface-variant">B 1234 XYZ • Gojek</p>
            </div>
          </div>
          
          <button className="w-full bg-[#C8956C] text-[#FFFFFF] h-[56px] rounded-[12px] text-body-lg font-body-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">check_circle</span>
            Diserahkan
          </button>
        </div>
      </section>

      {/* Section 3: Pengaturan */}
      <section className="space-y-4">
        <h2 className="text-headline-sm font-headline-sm text-on-surface">Pengaturan</h2>
        <div className="bg-surface-container-lowest rounded-radius-default editorial-shadow-elevated overflow-hidden border border-outline-variant/20">
          <a href="#" className="flex items-center justify-between p-4 border-b border-outline-variant/20 hover:bg-surface transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">person</span>
              <div>
                <p className="text-body-md font-body-md text-on-surface">Profil Warung</p>
                <p className="text-sm text-on-surface-variant">Info detail &amp; jam buka</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </a>
          
          <a href="#" className="flex items-center justify-between p-4 border-b border-outline-variant/20 hover:bg-surface transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">link</span>
              <div>
                <p className="text-body-md font-body-md text-on-surface">Koneksi Platform</p>
                <p className="text-sm text-on-surface-variant">2 Terhubung (GoFood, Grab)</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </a>
          
          <a href="#" className="flex items-center justify-between p-4 hover:bg-surface transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">print</span>
              <div>
                <p className="text-body-md font-body-md text-on-surface">Pengaturan Printer</p>
                <p className="text-sm text-on-surface-variant">Bluetooth Thermal 58mm</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </a>
        </div>
      </section>

      {/* Section 4: Akun */}
      <section className="pt-4">
        <button className="w-full border border-[#EDE8E2] text-[#1A1A1A] bg-transparent h-[56px] rounded-[12px] text-body-lg font-body-lg font-medium flex items-center justify-center gap-2 hover:bg-surface-dim transition-colors">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </section>
    </div>
  );
}
