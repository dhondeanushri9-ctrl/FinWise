// FinWise Landing Page Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';

export function LandingPage() {
  const { setActiveTab, setIsAiModalOpen } = useApp();

  return React.createElement('div', { className: 'min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors' },
    
    // HERO SECTION
    React.createElement('section', { className: 'relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8' },
      
      // Decorative background blur circles
      React.createElement('div', { className: 'absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none' }),
      React.createElement('div', { className: 'absolute top-1/3 right-10 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none' }),

      React.createElement('div', { className: 'max-w-6xl mx-auto relative z-10 text-center space-y-8' },
        
        // Soft Badge
        React.createElement('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs sm:text-sm font-semibold ai-pulse-badge' },
          React.createElement(Icon, { name: 'Sparkles', className: 'w-4 h-4 text-emerald-500' }),
          React.createElement('span', null, 'AI Financial Partner Built for Young Adults')
        ),

        // Main Headline
        React.createElement('h1', { className: 'text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight' },
          'Take control of your money with ',
          React.createElement('span', { className: 'gradient-text-emerald' }, 'AI precision'),
          ' — zero financial anxiety.'
        ),

        // Subtitle
        React.createElement('p', { className: 'text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed' },
          'FinWise automatically categorizes expenses, forecasts your 90-day cash flow, and delivers encouraging, non-judgmental guidance to help you build real wealth.'
        ),

        // CTA Buttons
        React.createElement('div', { className: 'flex flex-col sm:flex-row items-center justify-center gap-4 pt-4' },
          React.createElement('button', {
            onClick: () => setActiveTab('dashboard'),
            className: 'w-full sm:w-auto px-8 py-4 rounded-2xl gradient-bg-emerald text-white font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3'
          },
            React.createElement('span', null, 'Explore Live App Dashboard'),
            React.createElement(Icon, { name: 'ArrowUpRight', className: 'w-5 h-5' })
          ),
          React.createElement('button', {
            onClick: () => setIsAiModalOpen(true),
            className: 'w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold text-base hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-md'
          },
            React.createElement(Icon, { name: 'Bot', className: 'w-5 h-5 text-indigo-500' }),
            React.createElement('span', null, 'Try AI Financial Assistant')
          )
        ),

        // Live Hero Preview Card Mockup
        React.createElement('div', { className: 'pt-10 max-w-4xl mx-auto' },
          React.createElement('div', { className: 'glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 text-left space-y-6 relative overflow-hidden' },
            React.createElement('div', { className: 'flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-4' },
              React.createElement('div', { className: 'flex items-center gap-3' },
                React.createElement('div', { className: 'w-3 h-3 rounded-full bg-rose-400' }),
                React.createElement('div', { className: 'w-3 h-3 rounded-full bg-amber-400' }),
                React.createElement('div', { className: 'w-3 h-3 rounded-full bg-emerald-400' }),
                React.createElement('span', { className: 'text-xs font-semibold text-slate-400 ml-2' }, 'FinWise AI Overview')
              ),
              React.createElement('span', { className: 'text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full' }, 'Health Score: 84/100')
            ),

            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
              React.createElement('div', { className: 'p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 space-y-1' },
                React.createElement('p', { className: 'text-xs font-medium text-slate-500 dark:text-slate-400' }, 'Total Net Balance'),
                React.createElement('h3', { className: 'text-2xl font-extrabold text-slate-900 dark:text-white' }, '$14,250.80'),
                React.createElement('p', { className: 'text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1' },
                  React.createElement(Icon, { name: 'TrendingUp', className: 'w-3.5 h-3.5' }),
                  ' +4.2% this month'
                )
              ),
              React.createElement('div', { className: 'p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 space-y-1' },
                React.createElement('p', { className: 'text-xs font-medium text-slate-500 dark:text-slate-400' }, 'Monthly Spending'),
                React.createElement('h3', { className: 'text-2xl font-extrabold text-slate-900 dark:text-white' }, '$2,840.00'),
                React.createElement('p', { className: 'text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1' },
                  React.createElement(Icon, { name: 'ShieldCheck', className: 'w-3.5 h-3.5' }),
                  ' Under $3,100 Budget'
                )
              ),
              React.createElement('div', { className: 'p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 space-y-1' },
                React.createElement('p', { className: 'text-xs font-medium text-slate-500 dark:text-slate-400' }, 'Savings Rate'),
                React.createElement('h3', { className: 'text-2xl font-extrabold text-slate-900 dark:text-white' }, '28.5%'),
                React.createElement('p', { className: 'text-xs font-semibold text-violet-600 dark:text-violet-400' }, '+$450 automated saves')
              )
            ),

            // AI Insight Preview Bar
            React.createElement('div', { className: 'p-4 rounded-2xl gradient-bg-indigo text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg' },
              React.createElement('div', { className: 'flex items-center gap-3' },
                React.createElement('div', { className: 'p-2 rounded-xl bg-white/20' },
                  React.createElement(Icon, { name: 'Sparkles', className: 'w-5 h-5 text-white' })
                ),
                React.createElement('div', null,
                  React.createElement('p', { className: 'text-xs font-bold uppercase tracking-wider text-indigo-200' }, 'AI Insight of the Day'),
                  React.createElement('p', { className: 'text-xs sm:text-sm font-medium' }, '"You spent 18% less on dining out this week. Reallocate $65 into your Emergency Fund!"')
                )
              ),
              React.createElement('button', {
                onClick: () => setActiveTab('dashboard'),
                className: 'px-4 py-2 rounded-xl bg-white text-indigo-700 font-bold text-xs hover:bg-indigo-50 shrink-0 transition-colors shadow-xs'
              }, 'View Dashboard')
            )
          )
        )
      )
    ),

    // FEATURE HIGHLIGHTS SECTION
    React.createElement('section', { className: 'py-16 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8' },
      React.createElement('div', { className: 'max-w-6xl mx-auto space-y-12' },
        React.createElement('div', { className: 'text-center space-y-3 max-w-2xl mx-auto' },
          React.createElement('h2', { className: 'text-3xl font-extrabold tracking-tight' }, 'Designed for your financial peace of mind'),
          React.createElement('p', { className: 'text-slate-600 dark:text-slate-400 text-sm sm:text-base' }, 'Every tool in FinWise is engineered to reduce stress, automate good choices, and keep you confident.')
        ),

        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
          
          [
            {
              icon: 'Utensils',
              title: 'Expense Tracking',
              desc: 'Instant auto-categorization tags every coffee, rent payment, and subscription without manual headache.',
              color: 'emerald',
              tab: 'expenses'
            },
            {
              icon: 'LineChart',
              title: 'Spending Predictions',
              desc: 'Look 30, 60, and 90 days into the future with dynamic baseline & scenario forecasting models.',
              color: 'indigo',
              tab: 'predictions'
            },
            {
              icon: 'PiggyBank',
              title: 'Savings Assistant',
              desc: 'AI-generated micro-recommendations that identify small tweaks to save $100s without missing out.',
              color: 'violet',
              tab: 'savings'
            },
            {
              icon: 'Target',
              title: 'Financial Health Score',
              desc: 'A simple 0–100 wellness meter with non-judgmental habit breakdowns and downloadable reports.',
              color: 'amber',
              tab: 'insights'
            }
          ].map((feat, i) => React.createElement('div', {
            key: i,
            onClick: () => setActiveTab(feat.tab),
            className: 'glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 cursor-pointer space-y-4 text-left group'
          },
            React.createElement('div', {
              className: `w-12 h-12 rounded-2xl flex items-center justify-center bg-${feat.color}-500/10 text-${feat.color}-600 dark:text-${feat.color}-400 group-hover:scale-110 transition-transform`
            },
              React.createElement(Icon, { name: feat.icon, className: 'w-6 h-6' })
            ),
            React.createElement('h3', { className: 'text-lg font-bold text-slate-900 dark:text-white' }, feat.title),
            React.createElement('p', { className: 'text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed' }, feat.desc),
            React.createElement('div', { className: `text-xs font-bold text-${feat.color}-600 dark:text-${feat.color}-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform` },
              'Explore feature ',
              React.createElement(Icon, { name: 'ArrowUpRight', className: 'w-3.5 h-3.5' })
            )
          ))
        )
      )
    ),

    // 3-STEP "HOW IT WORKS" SECTION
    React.createElement('section', { className: 'py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto' },
      React.createElement('div', { className: 'space-y-14 text-center' },
        React.createElement('div', { className: 'space-y-3 max-w-2xl mx-auto' },
          React.createElement('span', { className: 'text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full' }, 'Simple & Frictionless'),
          React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold tracking-tight' }, 'How FinWise works in 3 easy steps'),
          React.createElement('p', { className: 'text-slate-600 dark:text-slate-400 text-sm sm:text-base' }, 'No complicated accounting jargon. Just clear, supportive financial clarity.')
        ),

        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 relative' },
          
          [
            {
              step: '01',
              title: 'Connect & Log Expenses',
              desc: 'Add transactions manually or import your spend history. FinWise tags categories automatically in seconds.',
              icon: 'Utensils'
            },
            {
              step: '02',
              title: 'AI Analyzes & Forecasts',
              desc: 'Our engine identifies spending patterns, calculates your health score, and projects 90-day cash flow.',
              icon: 'Bot'
            },
            {
              step: '03',
              title: 'Grow Savings Stress-Free',
              desc: 'Follow personalized micro-suggestions, automate savings goals, and watch your safety net thrive.',
              icon: 'PiggyBank'
            }
          ].map((item, idx) => React.createElement('div', {
            key: idx,
            className: 'glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 text-left space-y-4 relative group hover:border-emerald-500/40 transition-colors'
          },
            React.createElement('div', { className: 'flex items-center justify-between' },
              React.createElement('div', { className: 'w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-extrabold text-lg' },
                React.createElement(Icon, { name: item.icon, className: 'w-6 h-6 text-emerald-500' })
              ),
              React.createElement('span', { className: 'text-3xl font-black text-slate-200 dark:text-slate-800 font-heading' }, item.step)
            ),
            React.createElement('h3', { className: 'text-xl font-bold text-slate-900 dark:text-white' }, item.title),
            React.createElement('p', { className: 'text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed' }, item.desc)
          ))
        ),

        // Call to action bottom banner
        React.createElement('div', { className: 'p-8 sm:p-12 rounded-3xl gradient-bg-emerald text-white text-center space-y-6 shadow-2xl relative overflow-hidden' },
          React.createElement('div', { className: 'max-w-2xl mx-auto space-y-3 relative z-10' },
            React.createElement('h3', { className: 'text-2xl sm:text-3xl font-extrabold' }, 'Ready to feel good about your money?'),
            React.createElement('p', { className: 'text-emerald-100 text-sm sm:text-base' }, 'Join thousands of young adults who built a resilient financial safety net with FinWise.'),
            React.createElement('div', { className: 'pt-2' },
              React.createElement('button', {
                onClick: () => setActiveTab('dashboard'),
                className: 'px-8 py-3.5 rounded-2xl bg-white text-emerald-700 font-extrabold text-sm sm:text-base hover:bg-emerald-50 transition-colors shadow-lg shadow-black/10'
              }, 'Launch Dashboard Now')
            )
          )
        )
      )
    )
  );
}
