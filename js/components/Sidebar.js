// FinWise Desktop Sidebar Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';

export function Sidebar() {
  const { activeTab, setActiveTab } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'PieChart', badge: null },
    { id: 'expenses', label: 'Expense Tracker', icon: 'Utensils', badge: 'Live' },
    { id: 'predictions', label: 'Predictions', icon: 'LineChart', badge: 'AI Forecast' },
    { id: 'savings', label: 'Savings & Goals', icon: 'PiggyBank', badge: '4 Active' },
    { id: 'insights', label: 'Insights & Health', icon: 'Target', badge: 'Score 84' }
  ];

  if (activeTab === 'landing') return null;

  return React.createElement('aside', {
    className: 'hidden md:flex flex-col w-64 shrink-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-r border-slate-200/80 dark:border-slate-800/80 p-4 transition-colors min-h-[calc(100vh-4rem)] justify-between'
  },
    React.createElement('div', { className: 'space-y-6' },
      
      // Nav Title
      React.createElement('div', { className: 'px-3 py-1' },
        React.createElement('p', { className: 'text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500' }, 'Navigation')
      ),

      // Navigation Links
      React.createElement('nav', { className: 'space-y-1.5' },
        navItems.map(item => {
          const isActive = activeTab === item.id;
          return React.createElement('button', {
            key: item.id,
            onClick: () => setActiveTab(item.id),
            className: `w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              isActive 
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
            }`
          },
            React.createElement('div', { className: 'flex items-center gap-3' },
              React.createElement(Icon, { 
                name: item.icon, 
                className: `w-4 h-4 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}` 
              }),
              React.createElement('span', null, item.label)
            ),
            item.badge && React.createElement('span', {
              className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${
                isActive 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`
            }, item.badge)
          );
        })
      )
    ),

    // Bottom Supportive Card - Financial Anxiety Shield
    React.createElement('div', {
      className: 'p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50 space-y-2'
    },
      React.createElement('div', { className: 'flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs' },
        React.createElement(Icon, { name: 'ShieldCheck', className: 'w-4 h-4 text-indigo-500' }),
        React.createElement('span', null, 'Calm Money Mindset')
      ),
      React.createElement('p', { className: 'text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed' },
        'Small consistent habits matter more than sudden perfection. You are making real progress!'
      )
    )
  );
}
