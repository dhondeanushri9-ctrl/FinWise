// FinWise Dashboard Main View Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';
import { CATEGORIES, MONTHLY_TREND_DATA, AI_DAILY_INSIGHTS } from '../data/mockData.js';

export function DashboardPage() {
  const { 
    transactions, 
    savingsGoals, 
    dailyInsightIndex, 
    cycleDailyInsight,
    setActiveTab,
    setIsAiModalOpen
  } = useApp();

  // Calculate summary figures dynamically from state
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const currentBalance = 14250.80 + (totalIncome - totalExpense - 1800); // baseline formula offset
  const savingsRate = Math.round(((totalIncome - totalExpense) / (totalIncome || 1)) * 100) || 28;

  // Calculate spending breakdown by category
  const categoryTotals = CATEGORIES.map(cat => {
    const total = transactions
      .filter(t => t.type === 'expense' && t.category === cat.name)
      .reduce((sum, t) => sum + t.amount, 0);
    return { ...cat, value: total };
  }).filter(c => c.value > 0);

  const totalCategorizedExpense = categoryTotals.reduce((sum, c) => sum + c.value, 1);

  const currentInsight = AI_DAILY_INSIGHTS[dailyInsightIndex % AI_DAILY_INSIGHTS.length];

  return React.createElement('div', { className: 'space-y-8 animate-in fade-in duration-300' },
    
    // Page Header & Quick Actions
    React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight' },
          'Welcome back, Alex! 👋'
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1' },
          'Here is your financial snapshot & AI-powered wellness overview.'
        )
      ),

      React.createElement('div', { className: 'flex items-center gap-2.5' },
        React.createElement('button', {
          onClick: () => setActiveTab('expenses'),
          className: 'px-4 py-2.5 rounded-xl gradient-bg-emerald text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:opacity-90 transition-all flex items-center gap-2'
        },
          React.createElement(Icon, { name: 'Plus', className: 'w-4 h-4' }),
          React.createElement('span', null, 'Add Expense')
        ),
        React.createElement('button', {
          onClick: () => setIsAiModalOpen(true),
          className: 'px-4 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm font-bold hover:bg-indigo-100 transition-all flex items-center gap-2'
        },
          React.createElement(Icon, { name: 'Sparkles', className: 'w-4 h-4 text-indigo-500' }),
          React.createElement('span', null, 'AI Advisor')
        )
      )
    ),

    // SUMMARY CARDS (4 Grid)
    React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6' },
      
      // Total Balance Card
      React.createElement('div', { className: 'glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 space-y-3' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('span', { className: 'text-xs font-semibold text-slate-500 dark:text-slate-400' }, 'Total Net Balance'),
          React.createElement('div', { className: 'p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
            React.createElement(Icon, { name: 'DollarSign', className: 'w-4 h-4' })
          )
        ),
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('h3', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white' },
            `$${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          ),
          React.createElement('div', { className: 'flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400' },
            React.createElement(Icon, { name: 'TrendingUp', className: 'w-3.5 h-3.5' }),
            React.createElement('span', null, '+4.2% from last month')
          )
        )
      ),

      // Monthly Spending Card
      React.createElement('div', { className: 'glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 space-y-3' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('span', { className: 'text-xs font-semibold text-slate-500 dark:text-slate-400' }, 'Monthly Spending'),
          React.createElement('div', { className: 'p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' },
            React.createElement(Icon, { name: 'ShoppingBag', className: 'w-4 h-4' })
          )
        ),
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('h3', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white' },
            `$${totalExpense.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          ),
          React.createElement('div', { className: 'flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400' },
            React.createElement(Icon, { name: 'ShieldCheck', className: 'w-3.5 h-3.5' }),
            React.createElement('span', null, '$260 below monthly budget')
          )
        )
      ),

      // Savings Rate Card
      React.createElement('div', { className: 'glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 space-y-3' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('span', { className: 'text-xs font-semibold text-slate-500 dark:text-slate-400' }, 'Savings Rate'),
          React.createElement('div', { className: 'p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400' },
            React.createElement(Icon, { name: 'PiggyBank', className: 'w-4 h-4' })
          )
        ),
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('h3', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white' }, `${savingsRate}%`),
          React.createElement('div', { className: 'flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400' },
            React.createElement(Icon, { name: 'CheckCircle2', className: 'w-3.5 h-3.5' }),
            React.createElement('span', null, 'Target: > 20% (On Track)')
          )
        )
      ),

      // Upcoming Bills Card
      React.createElement('div', { className: 'glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 space-y-3' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('span', { className: 'text-xs font-semibold text-slate-500 dark:text-slate-400' }, 'Upcoming Bills (7d)'),
          React.createElement('div', { className: 'p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400' },
            React.createElement(Icon, { name: 'Zap', className: 'w-4 h-4' })
          )
        ),
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('h3', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white' }, '$485.00'),
          React.createElement('div', { className: 'flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400' },
            React.createElement('span', null, '2 bills scheduled (Rent & Power)')
          )
        )
      )
    ),

    // AI INSIGHT OF THE DAY CARD
    React.createElement('div', {
      className: 'p-6 rounded-3xl gradient-bg-indigo text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden'
    },
      React.createElement('div', { className: 'flex items-start gap-4' },
        React.createElement('div', { className: 'w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-white shadow-inner' },
          React.createElement(Icon, { name: currentInsight.icon, className: 'w-6 h-6' })
        ),
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('div', { className: 'flex items-center gap-2' },
            React.createElement('span', { className: 'text-xs font-extrabold uppercase tracking-wider text-indigo-200' }, 'AI Insight of the Day'),
            React.createElement('span', { className: 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white' }, currentInsight.tag)
          ),
          React.createElement('h3', { className: 'text-lg font-bold' }, currentInsight.title),
          React.createElement('p', { className: 'text-xs sm:text-sm text-indigo-100 leading-relaxed max-w-2xl' }, `"${currentInsight.text}"`)
        )
      ),

      React.createElement('button', {
        onClick: cycleDailyInsight,
        className: 'px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 backdrop-blur-xs flex items-center gap-2 shrink-0 transition-colors'
      },
        React.createElement(Icon, { name: 'Sparkles', className: 'w-4 h-4' }),
        React.createElement('span', null, 'Refresh Insight')
      )
    ),

    // CHARTS SECTION (2 Grid: Spending Breakdown + 6-Month Trend)
    React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-6' },
      
      // Category Breakdown Donut / Progress Visualizer (5 cols)
      React.createElement('div', { className: 'lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-6' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('div', null,
            React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, 'Category Breakdown'),
            React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'Where your money went this month')
          ),
          React.createElement('button', {
            onClick: () => setActiveTab('expenses'),
            className: 'text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline'
          }, 'View All')
        ),

        // Visual Stack Progress Bar
        React.createElement('div', { className: 'space-y-2' },
          React.createElement('div', { className: 'h-4 w-full rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800 p-0.5' },
            categoryTotals.map((cat, i) => {
              const pct = (cat.value / totalCategorizedExpense) * 100;
              return React.createElement('div', {
                key: i,
                style: { width: `${pct}%`, backgroundColor: cat.color },
                className: 'h-full transition-all duration-500 first:rounded-l-full last:rounded-r-full'
              });
            })
          )
        ),

        // Category Rows List
        React.createElement('div', { className: 'space-y-3.5 max-h-[300px] overflow-y-auto pr-1' },
          categoryTotals.map((cat, idx) => {
            const pct = Math.round((cat.value / totalCategorizedExpense) * 100);
            return React.createElement('div', {
              key: idx,
              className: 'flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors'
            },
              React.createElement('div', { className: 'flex items-center gap-3' },
                React.createElement('div', {
                  style: { backgroundColor: `${cat.color}20`, color: cat.color },
                  className: 'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold'
                },
                  React.createElement(Icon, { name: cat.icon, className: 'w-4 h-4' })
                ),
                React.createElement('div', null,
                  React.createElement('p', { className: 'text-xs font-bold text-slate-800 dark:text-slate-200' }, cat.name),
                  React.createElement('p', { className: 'text-[10px] text-slate-400 dark:text-slate-500' }, `${pct}% of total spend`)
                )
              ),
              React.createElement('span', { className: 'text-xs font-extrabold text-slate-900 dark:text-white' },
                `$${cat.value.toFixed(2)}`
              )
            );
          })
        )
      ),

      // 6-Month Spending Trend Area Visualizer (7 cols)
      React.createElement('div', { className: 'lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-6' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('div', null,
            React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, 'Monthly Financial Trend'),
            React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, 'Income vs Spending (Last 6 Months)')
          ),
          React.createElement('div', { className: 'flex items-center gap-4 text-xs font-semibold' },
            React.createElement('div', { className: 'flex items-center gap-1.5' },
              React.createElement('span', { className: 'w-3 h-3 rounded-full bg-emerald-500' }),
              React.createElement('span', { className: 'text-slate-600 dark:text-slate-400' }, 'Income')
            ),
            React.createElement('div', { className: 'flex items-center gap-1.5' },
              React.createElement('span', { className: 'w-3 h-3 rounded-full bg-indigo-500' }),
              React.createElement('span', { className: 'text-slate-600 dark:text-slate-400' }, 'Spending')
            )
          )
        ),

        // Bar Chart Visualizer
        React.createElement('div', { className: 'h-64 flex items-end justify-between gap-3 pt-6 pb-2 px-2' },
          MONTHLY_TREND_DATA.map((item, idx) => {
            const maxVal = 6000;
            const incomeHeight = (item.income / maxVal) * 100;
            const spendHeight = (item.spending / maxVal) * 100;

            return React.createElement('div', { key: idx, className: 'flex-1 flex flex-col items-center gap-2 h-full justify-end group' },
              React.createElement('div', { className: 'w-full flex items-end justify-center gap-1.5 h-full' },
                
                // Income Bar
                React.createElement('div', {
                  style: { height: `${incomeHeight}%` },
                  className: 'w-1/2 max-w-[18px] bg-emerald-500 rounded-t-lg group-hover:brightness-110 transition-all relative'
                },
                  React.createElement('div', { className: 'opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-1.5 rounded shadow pointer-events-none z-20 whitespace-nowrap' },
                    `+$${item.income}`
                  )
                ),

                // Spend Bar
                React.createElement('div', {
                  style: { height: `${spendHeight}%` },
                  className: 'w-1/2 max-w-[18px] bg-indigo-500 rounded-t-lg group-hover:brightness-110 transition-all relative'
                },
                  React.createElement('div', { className: 'opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-1.5 rounded shadow pointer-events-none z-20 whitespace-nowrap' },
                    `-$${item.spending}`
                  )
                )
              ),
              React.createElement('span', { className: 'text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate w-full text-center' },
                item.month.split(' ')[0]
              )
            );
          })
        )
      )
    )
  );
}
