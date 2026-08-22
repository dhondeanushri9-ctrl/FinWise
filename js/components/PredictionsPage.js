// FinWise Predictions & Forecasting Page Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';
import { FORECAST_PREDICTIONS_DATA } from '../data/mockData.js';

export function PredictionsPage() {
  const { scenarioReduction, setScenarioReduction, setIsAiModalOpen } = useApp();

  // Dynamic projection math based on scenario reduction slider
  const calculatedForecastData = FORECAST_PREDICTIONS_DATA.map(item => {
    const factor = 1 - (scenarioReduction / 100) * 0.35;
    const adjustedProjected = Math.round(item.baseline * factor);
    const adjustedLower = Math.round(item.lower * factor);
    return {
      ...item,
      projected: adjustedProjected,
      lower: adjustedLower
    };
  });

  const cumulative30DaySavings = Math.round(FORECAST_PREDICTIONS_DATA[2].baseline - calculatedForecastData[2].projected);
  const cumulative90DaySavings = Math.round(FORECAST_PREDICTIONS_DATA[6].baseline - calculatedForecastData[6].projected);

  return React.createElement('div', { className: 'space-y-8 animate-in fade-in duration-300' },
    
    // Page Title
    React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3' },
          'Predictions & Forecasting',
          React.createElement('span', { className: 'text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20' },
            '30 / 60 / 90 Days'
          )
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1' },
          'Simulate future spending scenarios and see how micro-adjustments impact your wealth buffer.'
        )
      )
    ),

    // INTERACTIVE SCENARIO SIMULATOR CARD
    React.createElement('div', { className: 'glass-card rounded-3xl p-6 border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/40 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/10 space-y-6 shadow-sm' },
      
      React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100 dark:border-indigo-900/50 pb-4' },
        React.createElement('div', { className: 'flex items-center gap-3' },
          React.createElement('div', { className: 'w-10 h-10 rounded-2xl gradient-bg-indigo flex items-center justify-center text-white shadow-md shadow-indigo-500/20' },
            React.createElement(Icon, { name: 'Sparkles', className: 'w-5 h-5' })
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, 'What-If Scenario Simulator'),
            React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'Adjust non-essential spend reduction target:')
          )
        ),
        React.createElement('div', { className: 'flex items-center gap-2 font-extrabold text-lg text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 px-4 py-1.5 rounded-2xl border border-indigo-200 dark:border-indigo-800 shadow-xs' },
          React.createElement('span', null, `-${scenarioReduction}% Spending`),
          React.createElement('span', { className: 'text-xs font-semibold text-slate-400' }, 'Reduction')
        )
      ),

      // Interactive Slider Input
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('div', { className: 'flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400' },
          React.createElement('span', null, '0% (Current Trend)'),
          React.createElement('span', null, '20% (Moderate Save)'),
          React.createElement('span', null, '40% (Aggressive Save)')
        ),
        React.createElement('input', {
          type: 'range',
          min: '0',
          max: '40',
          step: '5',
          value: scenarioReduction,
          onChange: (e) => setScenarioReduction(Number(e.target.value)),
          className: 'w-full accent-indigo-600'
        })
      ),

      // Scenario Output Highlights
      React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2' },
        React.createElement('div', { className: 'p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between' },
          React.createElement('div', null,
            React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'Projected 30-Day Savings Boost'),
            React.createElement('p', { className: 'text-xl font-extrabold text-emerald-600 dark:text-emerald-400' }, `+$${cumulative30DaySavings}`)
          ),
          React.createElement(Icon, { name: 'TrendingUp', className: 'w-6 h-6 text-emerald-500' })
        ),
        React.createElement('div', { className: 'p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between' },
          React.createElement('div', null,
            React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'Projected 90-Day Savings Boost'),
            React.createElement('p', { className: 'text-xl font-extrabold text-indigo-600 dark:text-indigo-400' }, `+$${cumulative90DaySavings}`)
          ),
          React.createElement(Icon, { name: 'PiggyBank', className: 'w-6 h-6 text-indigo-500' })
        )
      )
    ),

    // PROJECTION CHART VISUALIZER CARD
    React.createElement('div', { className: 'glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-6' },
      React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3' },
        React.createElement('div', null,
          React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, '90-Day Cumulative Spending Trajectory'),
          React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'Baseline trajectory vs AI simulated path')
        ),
        React.createElement('div', { className: 'flex items-center gap-4 text-xs font-semibold' },
          React.createElement('div', { className: 'flex items-center gap-1.5' },
            React.createElement('span', { className: 'w-3 h-3 rounded-full bg-slate-400' }),
            React.createElement('span', { className: 'text-slate-600 dark:text-slate-400' }, 'Baseline Path')
          ),
          React.createElement('div', { className: 'flex items-center gap-1.5' },
            React.createElement('span', { className: 'w-3 h-3 rounded-full bg-emerald-500' }),
            React.createElement('span', { className: 'text-emerald-600 dark:text-emerald-400' }, 'AI Simulated Path')
          )
        )
      ),

      // Visual Line / Area Forecast Chart
      React.createElement('div', { className: 'h-64 flex items-end justify-between gap-2 pt-8 pb-4 px-2 relative' },
        calculatedForecastData.map((item, idx) => {
          const maxVal = 6500;
          const baselinePct = (item.baseline / maxVal) * 100;
          const projectedPct = (item.projected / maxVal) * 100;

          return React.createElement('div', { key: idx, className: 'flex-1 flex flex-col items-center gap-2 h-full justify-end group' },
            React.createElement('div', { className: 'w-full flex items-end justify-center gap-1.5 h-full relative' },
              
              // Baseline Bar
              React.createElement('div', {
                style: { height: `${baselinePct}%` },
                className: 'w-1/2 max-w-[14px] bg-slate-300 dark:bg-slate-700 rounded-t-lg group-hover:brightness-110 transition-all relative'
              },
                React.createElement('div', { className: 'opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-1.5 rounded shadow pointer-events-none z-20 whitespace-nowrap' },
                  `Baseline: $${item.baseline}`
                )
              ),

              // AI Projected Bar
              React.createElement('div', {
                style: { height: `${projectedPct}%` },
                className: 'w-1/2 max-w-[14px] bg-emerald-500 rounded-t-lg group-hover:brightness-110 transition-all relative'
              },
                React.createElement('div', { className: 'opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[10px] py-1 px-1.5 rounded shadow pointer-events-none z-20 whitespace-nowrap font-bold' },
                  `Optimized: $${item.projected}`
                )
              )
            ),
            React.createElement('span', { className: 'text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 truncate w-full text-center' },
              item.day.split(' ')[0]
            )
          );
        })
      )
    ),

    // "IF THIS TREND CONTINUES..." MESSAGING CARDS
    React.createElement('div', { className: 'space-y-4' },
      React.createElement('h3', { className: 'text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2' },
        React.createElement(Icon, { name: 'Sparkles', className: 'w-5 h-5 text-indigo-500' }),
        'If this trend continues...'
      ),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        
        // Positive Outlook Card
        React.createElement('div', { className: 'glass-card rounded-2xl p-5 border border-emerald-200 dark:border-emerald-900/50 space-y-3' },
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('div', { className: 'p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
              React.createElement(Icon, { name: 'ShieldCheck', className: 'w-5 h-5' })
            ),
            React.createElement('h4', { className: 'font-bold text-slate-900 dark:text-white text-sm' }, 'Emergency Cushion Milestone')
          ),
          React.createElement('p', { className: 'text-xs text-slate-600 dark:text-slate-300 leading-relaxed' },
            `With your ${scenarioReduction}% optimization, you will fully fund your $3,000 Emergency Fund by October 14th — 18 days ahead of your initial target!`
          )
        ),

        // Intelligent Risk Alert Card
        React.createElement('div', { className: 'glass-card rounded-2xl p-5 border border-amber-200 dark:border-amber-900/50 space-y-3' },
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('div', { className: 'p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400' },
              React.createElement(Icon, { name: 'Zap', className: 'w-5 h-5' })
            ),
            React.createElement('h4', { className: 'font-bold text-slate-900 dark:text-white text-sm' }, 'Seasonal Spike Alert')
          ),
          React.createElement('p', { className: 'text-xs text-slate-600 dark:text-slate-300 leading-relaxed' },
            'Historical data shows a 14% spending uptick during holiday months (Nov/Dec). FinWise recommends reserving $350 early to prevent cash stress.'
          )
        )
      )
    )
  );
}
