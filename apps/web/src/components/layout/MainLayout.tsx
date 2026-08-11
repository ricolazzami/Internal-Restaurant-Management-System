import { Outlet, Link, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/orders', label: 'Orders', icon: 'receipt_long' },
    { path: '/kitchen', label: 'Kitchen', icon: 'chef_hat' },
    { path: '/menu', label: 'Menu', icon: 'restaurant_menu' },
    { path: '/more', label: 'More', icon: 'more_horiz', isMore: true },
  ];

  return (
    <div className="bg-background min-h-screen pb-[100px] flex flex-col md:flex-row">
      {/* SideNav (Web Only) */}
      <aside className="hidden md:flex flex-col w-64 bg-surface-container-lowest border-r border-outline-variant/20 h-screen sticky top-0 py-6 px-4">
        <div className="mb-8 px-4">
          <h1 className="text-headline-md font-headline-md text-primary tracking-tight">WarungPOS</h1>
        </div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-container font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-high font-medium'
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-body-md font-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col w-full">
        {/* TopAppBar */}
        <header className="flex justify-between items-center px-margin-page py-4 w-full bg-background dark:bg-background text-primary dark:text-on-primary docked full-width top-0 z-40 sticky">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant md:hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG7-OK9RcKtRwIWXXezF3zbt4kpV9-RYB427ZMKm0J_JfbzDd0Zvt15tpbfO6O1qI6agJ53VmrzS4hH78-ksNjRBleipC1xMNx5qZjlviVHCz8rHsEp72MSHQR3Lbzcwmt6tMN6LpUrMpxhBk4nFA0Rpds_hGvu3Mxo2L7--IxKT4xg0LTEViuyQcudXPHuwkq999Al8Y7aGQKHPBSSAWPpnvQpHTHAqjTOcxxd39mjyvfJVjhSuYG" 
                alt="Warung Owner Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-headline-md font-headline-md text-primary dark:text-on-primary tracking-tight md:hidden">
              WarungPOS
            </h1>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface">notifications</span>
          </button>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 px-margin-page py-6 w-full mx-auto max-w-3xl">
          <Outlet />
        </div>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface dark:bg-surface-container-lowest shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center px-3 py-1.5 transition-colors rounded-xl ${
                isActive
                  ? item.isMore
                    ? 'bg-secondary-container text-on-secondary-container scale-90'
                    : 'text-primary bg-surface-container-high'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : ''}`}>
                {item.icon}
              </span>
              <span className="text-label-caps font-label-caps mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
