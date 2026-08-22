// FinWise Insights & Financial Health Score Page Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';
import { FINANCIAL_HEALTH_METRICS } from '../data/mockData.js';

export function InsightsPage() {
  const { transactions, savingsGoals } = useApp();
  const [isExportModalOpen, setIsExportModalOpen] = React.useState(false);
  const [exportFormat, setExportFormat] = React.useState('CSV');
  const [isExporting, setIsExporting] = React.useState(false);

  const metrics = FINANCIAL_HEALTH_METRICS;
  const score = metrics.overallScore;

  // Calculate SVG Circle Gauge properties
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const triggerExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setIsExportModalOpen(false);

      if (exportFormat === 'CSV') {
        const csvRows = [
          ['ID', 'Title', 'Category', 'Date', 'Amount', 'Type'],
          ...transactions.map(t => [t.id, `"${t.title}"`, `"${t.category}"`, t.date, t.amount, t.type])
        ];
        const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `FinWise_Financial_Report_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.print();
      }
    }, 800);
  };

  return React.createElement('div', { className: 'space-y-8 animate-in fade-in duration-300' },
    
    // Page Header & Export Action
    React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3' },
          'Insights & Health Score',
          React.createElement('span', { className: 'text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20' },
            'Monthly Audit'
          )
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1' },
          'Holistic evaluation of your spending habits, debt cushion, and goal velocity.'
        )
      ),

      React.createElement('button', {
        onClick: () => setIsExportModalOpen(true),
        className: 'px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold shadow-md hover:opacity-90 transition-all flex items-center gap-2 self-start sm:self-auto'
      },
        React.createElement(Icon, { name: 'ArrowUpRight', className: 'w-4 h-4' }),
        React.createElement('span', null, 'Export Financial Report')
      )
    ),

    // FINANCIAL HEALTH GAUGE & OVERVIEW (2 Grid)
    React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch' },
      
      // Health Score Gauge Card (5 cols)
      React.createElement('div', { className: 'lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 text-center space-y-6 flex flex-col justify-center' },
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('span', { className: 'text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full' }, 'Monthly Health Gauge'),
          React.createElement('h3', { className: 'text-xl font-extrabold text-slate-900 dark:text-white pt-2' }, 'Overall Score')
        ),

        // SVG Speedometer/Circular Gauge Visualizer
        React.createElement('div', { className: 'gauge-container flex items-center justify-center my-2' },
          React.createElement('svg', { className: 'gauge-svg w-44 h-44', viewBox: '0 0 160 160' },
            
            // Background Circle
            React.createElement('circle', {
              cx: '80',
              cy: '80',
              r: radius,
              className: 'gauge-circle-bg stroke-slate-200 dark:stroke-slate-800'
            }),

            // Progress Arc
            React.createElement('circle', {
              cx: '80',
              cy: '80',
              r: radius,
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              className: 'gauge-circle-progress stroke-emerald-500'
            })
          ),
          
          // Inner Score Text overlay
          React.createElement('div', { className: 'absolute inset-0 flex flex-col items-center justify-center' },
            React.createElement('span', { className: 'text-4xl font-extrabold text-slate-900 dark:text-white font-heading' }, score),
            React.createElement('span', { className: 'text-xs font-bold text-emerald-600 dark:text-emerald-400' }, metrics.statusLabel)
          )
        ),

        React.createElement('p', { className: 'text-xs text-slate-600 dark:text-slate-400 max-w-xs mx-auto leading-relaxed' },
          metrics.statusDescription
        )
      ),

      // Health Pillars Breakdown Grid (7 cols)
      React.createElement('div', { className: 'lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-6 flex flex-col justify-between' },
        React.createElement('div', null,
          React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, 'Financial Wellness Pillars'),
          React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, '4 core indicators evaluated by FinWise AI')
        ),

        React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
          metrics.pillars.map((pillar, idx) => React.createElement('div', {
            key: idx,
            className: 'p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 space-y-2'
          },
            React.createElement('div', { className: 'flex items-center justify-between' },
              React.createElement('span', { className: 'text-xs font-bold text-slate-900 dark:text-white' }, pillar.name),
              React.createElement('span', { className: 'text-xs font-extrabold text-emerald-600 dark:text-emerald-400' }, `${pillar.score}/100`)
            ),
            React.createElement('div', { className: 'h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden' },
              React.createElement('div', {
                style: { width: `${pillar.score}%` },
                className: 'h-full gradient-bg-emerald rounded-full'
              })
            ),
            React.createElement('p', { className: 'text-[11px] text-slate-500 dark:text-slate-400 leading-snug' }, pillar.description)
          ))
        )
      )
    ),

    // TEXT-BASED HABIT SUMMARY & TREND ANALYSIS
    React.createElement('div', { className: 'glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 space-y-6' },
      React.createElement('div', { className: 'flex items-center gap-3' },
        React.createElement('div', { className: 'w-10 h-10 rounded-2xl gradient-bg-violet flex items-center justify-center text-white shadow-md shadow-violet-500/20' },
          React.createElement(Icon, { name: 'Sparkles', className: 'w-5 h-5' })
        ),
        React.createElement('div', null,
          React.createElement('h3', { className: 'font-bold text-lg text-slate-900 dark:text-white' }, 'Monthly Behavioral Summary'),
          React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'AI synthesis of your transaction velocity')
        )
      ),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 pt-2' },
        
        React.createElement('div', { className: 'space-y-2' },
          React.createElement('h4', { className: 'font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5' },
            React.createElement(Icon, { name: 'ShieldCheck', className: 'w-4 h-4' }),
            'Key Strengths'
          ),
          React.createElement('ul', { className: 'text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed' },
            React.createElement('li', null, 'Consistently saved > 28% of net income for 4 straight months.'),
            React.createElement('li', null, 'Zero overdraft or high-interest penalty fees incurred.'),
            React.createElement('li', null, 'Housing & rent costs strictly capped at < 31% of budget.')
          )
        ),

        React.createElement('div', { className: 'space-y-2' },
          React.createElement('h4', { className: 'font-bold text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5' },
            React.createElement(Icon, { name: 'Target', className: 'w-4 h-4' }),
            'Areas for Gentle Growth'
          ),
          React.createElement('ul', { className: 'text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed' },
            React.createElement('li', null, 'Weekend dining out accounts for 68% of food expenditure.'),
            React.createElement('li', null, 'Multiple digital subscriptions can be consolidated into family plans.'),
            React.createElement('li', null, 'Maintain cash flow buffer ahead of seasonal holiday spend.')
          )
        ),

        React.createElement('div', { className: 'space-y-2' },
          React.createElement('h4', { className: 'font-bold text-sm text-violet-600 dark:text-violet-400 flex items-center gap-1.5' },
            React.createElement(Icon, { name: 'Award', className: 'w-4 h-4' }),
            'Wellness Encouragement'
          ),
          React.createElement('p', { className: 'text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed' },
            '"Financial wellness is a marathon, not a sprint. Your discipline in building an emergency cushion puts you in the top tier of young adult savers. Be proud of your progress!"'
          )
        )
      )
    ),

    // EXPORT REPORT MODAL
    isExportModalOpen && React.createElement('div', {
      className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-xs'
    },
      React.createElement('div', {
        className: 'w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 animate-in zoom-in-95 duration-200'
      },
        React.createElement('div', { className: 'flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3' },
          React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, 'Export Financial Report'),
          React.createElement('button', {
            onClick: () => setIsExportModalOpen(false),
            className: 'p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white'
          }, React.createElement(Icon, { name: 'Plus', className: 'w-5 h-5 rotate-45' }))
        ),

        React.createElement('div', { className: 'space-y-4 text-xs sm:text-sm' },
          React.createElement('p', { className: 'text-slate-600 dark:text-slate-400' },
            'Choose your preferred format to export transactions, health metrics, and savings targets.'
          ),

          React.createElement('div', { className: 'grid grid-cols-2 gap-3' },
            React.createElement('button', {
              type: 'button',
              onClick: () => setExportFormat('CSV'),
              className: `p-4 rounded-2xl border text-center font-bold transition-all ${
                exportFormat === 'CSV' 
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-xs' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`
            },
              React.createElement(Icon, { name: 'ArrowUpRight', className: 'w-5 h-5 mx-auto mb-1' }),
              'CSV Spreadsheet'
            ),
            React.createElement('button', {
              type: 'button',
              onClick: () => setExportFormat('PDF'),
              className: `p-4 rounded-2xl border text-center font-bold transition-all ${
                exportFormat === 'PDF' 
                  ? 'border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-xs' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`
            },
              React.createElement(Icon, { name: 'CheckCircle2', className: 'w-5 h-5 mx-auto mb-1' }),
              'Print / PDF'
            )
          ),

          React.createElement('div', { className: 'flex justify-end gap-2 pt-2' },
            React.createElement('button', {
              type: 'button',
              onClick: () => setIsExportModalOpen(false),
              className: 'px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold'
            }, 'Cancel'),
            React.createElement('button', {
              type: 'button',
              onClick: triggerExport,
              disabled: isExporting,
              className: 'px-5 py-2 rounded-xl gradient-bg-emerald text-white font-bold shadow-md shadow-emerald-500/20'
            }, isExporting ? 'Generating Report...' : `Download ${exportFormat}`)
          )
        )
      )
    )
  );
}
