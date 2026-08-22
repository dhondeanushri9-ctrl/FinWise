// FinWise Header Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';

export function Header() {
  const { 
    activeTab, 
    setActiveTab, 
    isDarkMode, 
    toggleDarkMode, 
    setIsAiModalOpen 
  } = useApp();

  return React.createElement('header', {
    className: 'sticky top-0 z-30 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors'
  }, 
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between' },
      
      // Brand Logo & Mode Switcher
      React.createElement('div', { className: 'flex items-center gap-4 sm:gap-6' },
        React.createElement('button', {
          onClick: () => setActiveTab('landing'),
          className: 'flex items-center gap-2.5 group focus:outline-none'
        },
          React.createElement('div', {
            className: 'w-10 h-10 rounded-xl gradient-bg-emerald flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform'
          },
            React.createElement(Icon, { name: 'Sparkles', className: 'w-5 h-5' })
          ),
          React.createElement('div', { className: 'flex flex-col text-left' },
            React.createElement('span', { className: 'font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none flex items-center gap-1' },
              'FinWise',
              React.createElement('span', { className: 'text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' }, 'AI')
            ),
            React.createElement('span', { className: 'text-[10px] font-medium text-slate-500 dark:text-slate-400' }, 'Financial Wellness Platform')
          )
        ),

        // Quick View Selector (Landing vs App)
        React.createElement('div', { className: 'hidden md:flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60' },
          React.createElement('button', {
            onClick: () => setActiveTab('landing'),
            className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'landing' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`
          }, 'Landing Page'),
          React.createElement('button', {
            onClick: () => setActiveTab('dashboard'),
            className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab !== 'landing' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`
          }, 'App View')
        )
      ),

      // Header Controls: AI Assistant Trigger, Theme Toggle, User Profile
      React.createElement('div', { className: 'flex items-center gap-2 sm:gap-3' },
        
        // Ask FinWise AI Trigger Button
        React.createElement('button', {
          onClick: () => setIsAiModalOpen(true),
          className: 'relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all shadow-sm group'
        },
          React.createElement('div', { className: 'w-2 h-2 rounded-full bg-indigo-500 animate-ping absolute -top-0.5 -right-0.5' }),
          React.createElement(Icon, { name: 'Bot', className: 'w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform' }),
          React.createElement('span', { className: 'hidden xs:inline' }, 'Ask FinWise AI')
        ),

        // Dark/Light Theme Toggle
        React.createElement('button', {
          onClick: toggleDarkMode,
          ariaLabel: 'Toggle dark mode',
          className: 'p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700'
        },
          React.createElement(Icon, { name: isDarkMode ? 'Sun' : 'Moon', className: 'w-5 h-5' })
        ),

        // User Profile Pill
        React.createElement('div', { className: 'hidden sm:flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800' },
          React.createElement('div', { className: 'w-8 h-8 rounded-full gradient-bg-violet flex items-center justify-center text-white font-bold text-xs shadow' }, 'AR'),
          React.createElement('div', { className: 'flex flex-col text-left' },
            React.createElement('span', { className: 'text-xs font-bold text-slate-800 dark:text-slate-200 leading-none' }, 'Alex Rivera'),
            React.createElement('span', { className: 'text-[10px] text-emerald-600 dark:text-emerald-400 font-medium' }, 'Pro Saver')
          )
        )
      )
    )
  );
}
