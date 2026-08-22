// FinWise Mobile Navigation Bar Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';

export function MobileNav() {
  const { activeTab, setActiveTab } = useApp();

  if (activeTab === 'landing') return null;

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: 'PieChart' },
    { id: 'expenses', label: 'Expenses', icon: 'Utensils' },
    { id: 'predictions', label: 'Predict', icon: 'LineChart' },
    { id: 'savings', label: 'Savings', icon: 'PiggyBank' },
    { id: 'insights', label: 'Health', icon: 'Target' }
  ];

  return React.createElement('div', {
    className: 'md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 flex items-center justify-around shadow-lg'
  },
    navItems.map(item => {
      const isActive = activeTab === item.id;
      return React.createElement('button', {
        key: item.id,
        onClick: () => setActiveTab(item.id),
        className: `flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
          isActive 
            ? 'text-emerald-600 dark:text-emerald-400 font-bold scale-105' 
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`
      },
        React.createElement(Icon, { name: item.icon, className: `w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}` }),
        React.createElement('span', { className: 'text-[10px] font-medium' }, item.label)
      );
    })
  );
}
