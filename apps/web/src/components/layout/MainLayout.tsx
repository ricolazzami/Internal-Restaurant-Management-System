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
    <div className="bg-background min-h-screen w-full">
      <div className="mx-auto w-full max-w-[430px] min-h-screen bg-background relative pb-[96px] shadow-[0_0_0_1px_rgba(0,0,0,0.03)]">
        <header className="flex justify-between items-center px-margin-page py-4 w-full bg-background text-primary sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG7-OK9RcKtRwIWXXezF3zbt4kpV9-RYB427ZMKm0J_JfbzDd0Zvt15tpbfO6O1qI6agJ53VmrzS4hH78-ksNjRBleipC1xMNx5qZjlviVHCz8rHsEp72MSHQR3Lbzcwmt6tMN6LpUrMpxhBk4nFA0Rpds_hGvu3Mxo2L7--IxKT4xg0LTEViuyQcudXPHuwkq999Al8Y7aGQKHPBSSAWPpnvQpHTHAqjTOcxxd39mjyvfJVjhSuYG" 
                alt="Warung Owner Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-headline-md font-headline-md text-primary tracking-tight">
              WarungPOS
            </h1>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface">notifications</span>
          </button>
        </header>

        <div className="flex-1 px-margin-page py-6 w-full mx-auto">
          <Outlet />
        </div>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl">
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
    </div>
  );
}
