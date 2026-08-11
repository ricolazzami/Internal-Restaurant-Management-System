export default function Menu() {
  return (
    <div className="space-y-6 w-full">
      {/* Search & Categories */}
      <div className="space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input type="text" placeholder="Cari menu..." className="w-full h-[48px] pl-12 pr-4 bg-surface-container-lowest border border-outline-variant/30 rounded-radius-sm text-body-md font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary editorial-shadow-rest" />
        </div>
        
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-on-primary text-label-caps font-label-caps tracking-wider transition-colors">SEMUA</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">MAKANAN</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">MINUMAN</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high text-label-caps font-label-caps tracking-wider transition-colors">SAMBAL</button>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Item 1: Available */}
        <article className="bg-surface-container-lowest rounded-radius-default editorial-shadow-rest p-padding-card border border-outline-variant/20 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-body-lg font-body-lg font-bold text-primary">Ayam Penyet</h3>
              {/* Custom Toggle */}
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-0.5 left-0.5 checked:right-0.5 checked:left-auto" defaultChecked />
                  <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer"></label>
              </div>
            </div>
            <p className="text-price-display font-price-display text-on-surface mb-4">Rp 22.000</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-label-caps text-on-surface-variant">
              <span>SISA STOK</span>
              <span className="text-primary font-bold">24 Porsi</span>
            </div>
            {/* Visual Stock Bar */}
            <div className="w-full h-2 rounded-full progress-bar-bg overflow-hidden flex">
               <div className="h-full progress-bar-fill-green" style={{width: '60%'}}></div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-label-caps font-label-caps text-primary bg-primary-fixed px-2 py-1 rounded">TERSEDIA</span>
              <div className="flex items-center gap-3 bg-surface-container px-2 py-1 rounded-full border border-outline-variant/20">
                <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="text-body-md font-body-md font-medium w-4 text-center">24</span>
                <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Item 2: Running Low */}
        <article className="bg-surface-container-lowest rounded-radius-default editorial-shadow-rest p-padding-card border border-outline-variant/20 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-body-lg font-body-lg font-bold text-primary">Lele Goreng</h3>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-0.5 left-0.5 checked:right-0.5 checked:left-auto" defaultChecked />
                  <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer"></label>
              </div>
            </div>
            <p className="text-price-display font-price-display text-on-surface mb-4">Rp 15.000</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-label-caps text-on-surface-variant">
              <span>SISA STOK</span>
              <span className="text-secondary font-bold">5 Porsi</span>
            </div>
            <div className="w-full h-2 rounded-full progress-bar-bg overflow-hidden flex">
               <div className="h-full progress-bar-fill-yellow" style={{width: '15%'}}></div>
            </div>
            <div className="flex items-center justify-between pt-2">
               <span className="text-label-caps font-label-caps text-secondary bg-secondary-fixed px-2 py-1 rounded">MENIPIS</span>
              <div className="flex items-center gap-3 bg-surface-container px-2 py-1 rounded-full border border-outline-variant/20">
                <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="text-body-md font-body-md font-medium w-4 text-center">5</span>
                <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Item 3: Empty */}
        <article className="bg-surface rounded-radius-default editorial-shadow-rest p-padding-card border border-outline-variant/30 flex flex-col justify-between opacity-60 grayscale-[50%]">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-body-lg font-body-lg font-bold text-on-surface-variant line-through">Nasi Uduk</h3>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle3" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-0.5 left-0.5 checked:right-0.5 checked:left-auto" />
                  <label htmlFor="toggle3" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer"></label>
              </div>
            </div>
            <p className="text-price-display font-price-display text-on-surface-variant mb-4">Rp 6.000</p>
          </div>
          
          <div className="space-y-3">
             <div className="flex justify-between text-xs font-label-caps text-on-surface-variant">
              <span>SISA STOK</span>
              <span className="font-bold">0 Porsi</span>
            </div>
             <div className="w-full h-2 rounded-full progress-bar-bg overflow-hidden flex">
            </div>
            <div className="flex items-center justify-between pt-2">
               <span className="text-label-caps font-label-caps text-error bg-error-container px-2 py-1 rounded">HABIS</span>
              <div className="flex items-center gap-3 bg-surface-container px-2 py-1 rounded-full border border-outline-variant/20 opacity-50 pointer-events-none">
                <button className="w-6 h-6 flex items-center justify-center rounded-full text-primary">
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="text-body-md font-body-md font-medium w-4 text-center">0</span>
                <button className="w-6 h-6 flex items-center justify-center rounded-full text-primary">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-4 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-on-primary rounded-full editorial-shadow-flying flex items-center justify-center hover:scale-105 transition-transform z-40">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}
