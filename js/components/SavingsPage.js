// FinWise Savings Recommendations & Goals Tracker Page Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';

export function SavingsPage() {
  const { 
    savingsGoals, 
    addSavingsGoal, 
    depositToGoal, 
    aiRecommendations, 
    applyRecommendation 
  } = useApp();

  // Deposit Modal State
  const [depositModalGoal, setDepositModalGoal] = React.useState(null);
  const [depositAmount, setDepositAmount] = React.useState('');

  // Add Goal Modal State
  const [isAddGoalOpen, setIsAddGoalOpen] = React.useState(false);
  const [goalTitle, setGoalTitle] = React.useState('');
  const [targetAmount, setTargetAmount] = React.useState('');
  const [currentAmount, setCurrentAmount] = React.useState('');
  const [category, setCategory] = React.useState('General Savings');
  const [color, setColor] = React.useState('emerald');

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    if (!depositModalGoal || !depositAmount) return;
    depositToGoal(depositModalGoal.id, depositAmount);
    setDepositModalGoal(null);
    setDepositAmount('');
  };

  const handleAddGoalSubmit = (e) => {
    e.preventDefault();
    if (!goalTitle.trim() || !targetAmount) return;
    addSavingsGoal({
      title: goalTitle,
      targetAmount,
      currentAmount: currentAmount || 0,
      category,
      color
    });
    setIsAddGoalOpen(false);
    setGoalTitle('');
    setTargetAmount('');
    setCurrentAmount('');
  };

  return React.createElement('div', { className: 'space-y-8 animate-in fade-in duration-300' },
    
    // Page Header & Add Goal Button
    React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3' },
          'Savings & AI Recommendations',
          React.createElement('span', { className: 'text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' },
            'Smart Wealth Builder'
          )
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1' },
          'Automate progress toward your real-life targets with AI advice.'
        )
      ),

      React.createElement('button', {
        onClick: () => setIsAddGoalOpen(true),
        className: 'px-4 py-2.5 rounded-xl gradient-bg-emerald text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:opacity-90 transition-all flex items-center gap-2 self-start sm:self-auto'
      },
        React.createElement(Icon, { name: 'Plus', className: 'w-4 h-4' }),
        React.createElement('span', null, 'New Savings Goal')
      )
    ),

    // SAVINGS GOALS TRACKER SECTION
    React.createElement('div', { className: 'space-y-4' },
      React.createElement('div', { className: 'flex items-center justify-between' },
        React.createElement('h3', { className: 'text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2' },
          React.createElement(Icon, { name: 'PiggyBank', className: 'w-5 h-5 text-emerald-500' }),
          'Active Savings Goals'
        ),
        React.createElement('span', { className: 'text-xs font-semibold text-slate-400' }, `${savingsGoals.length} goals tracked`)
      ),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
        savingsGoals.map(goal => {
          const pct = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
          const remaining = Math.max(0, goal.targetAmount - goal.currentAmount);

          return React.createElement('div', {
            key: goal.id,
            className: 'glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-5 relative'
          },
            React.createElement('div', { className: 'flex items-start justify-between gap-3' },
              React.createElement('div', { className: 'flex items-center gap-3' },
                React.createElement('div', {
                  className: `w-11 h-11 rounded-2xl bg-${goal.color}-500/10 text-${goal.color}-600 dark:text-${goal.color}-400 flex items-center justify-center font-bold shrink-0`
                },
                  React.createElement(Icon, { name: 'PiggyBank', className: 'w-5 h-5' })
                ),
                React.createElement('div', null,
                  React.createElement('h4', { className: 'font-bold text-base text-slate-900 dark:text-white' }, goal.title),
                  React.createElement('span', { className: 'text-xs text-slate-500 dark:text-slate-400 font-medium' }, goal.category)
                )
              ),
              React.createElement('span', { className: 'text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
                `${pct}% Funded`
              )
            ),

            // Amount Figures
            React.createElement('div', { className: 'flex items-baseline justify-between' },
              React.createElement('div', null,
                React.createElement('span', { className: 'text-2xl font-extrabold text-slate-900 dark:text-white' },
                  `$${goal.currentAmount.toLocaleString()}`
                ),
                React.createElement('span', { className: 'text-xs font-medium text-slate-400 ml-1' },
                  `/ $${goal.targetAmount.toLocaleString()}`
                )
              ),
              React.createElement('span', { className: 'text-xs font-semibold text-slate-500 dark:text-slate-400' },
                `$${remaining.toLocaleString()} left`
              )
            ),

            // Progress Bar
            React.createElement('div', { className: 'space-y-1' },
              React.createElement('div', { className: 'h-3.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5' },
                React.createElement('div', {
                  style: { width: `${pct}%` },
                  className: 'h-full gradient-bg-emerald rounded-full transition-all duration-700 shadow-xs'
                })
              )
            ),

            // Quick Deposit Button
            React.createElement('div', { className: 'pt-1 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60' },
              React.createElement('span', { className: 'text-xs text-slate-500 dark:text-slate-400' },
                goal.monthlyContribution ? `+$${goal.monthlyContribution}/mo auto-save` : 'Manual contributions'
              ),
              React.createElement('button', {
                onClick: () => setDepositModalGoal(goal),
                className: 'px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-xs transition-colors'
              }, '+ Quick Deposit')
            )
          );
        })
      )
    ),

    // AI-GENERATED RECOMMENDATIONS CARDS
    React.createElement('div', { className: 'space-y-4 pt-4' },
      React.createElement('div', { className: 'flex items-center justify-between' },
        React.createElement('h3', { className: 'text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2' },
          React.createElement(Icon, { name: 'Sparkles', className: 'w-5 h-5 text-indigo-500' }),
          'AI-Generated Savings Suggestions'
        ),
        React.createElement('span', { className: 'text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full' },
          'Updated Today'
        )
      ),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        aiRecommendations.map(rec => React.createElement('div', {
          key: rec.id,
          className: `glass-card rounded-3xl p-6 border transition-all ${
            rec.applied 
              ? 'border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/5' 
              : 'border-slate-200/80 dark:border-slate-800/80'
          } space-y-4`
        },
          React.createElement('div', { className: 'flex items-start justify-between gap-3' },
            React.createElement('div', { className: 'space-y-1' },
              React.createElement('div', { className: 'flex items-center gap-2' },
                React.createElement('span', { className: 'text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20' },
                  rec.badge
                ),
                React.createElement('span', { className: 'text-xs font-bold text-emerald-600 dark:text-emerald-400' }, rec.impact)
              ),
              React.createElement('h4', { className: 'font-bold text-base text-slate-900 dark:text-white' }, rec.title)
            ),
            React.createElement('div', { className: 'text-right' },
              React.createElement('span', { className: 'text-xs text-slate-400 block' }, 'Est. Yearly Save'),
              React.createElement('span', { className: 'text-base font-extrabold text-slate-900 dark:text-white' }, `$${rec.savingsEstimate}`)
            )
          ),

          React.createElement('p', { className: 'text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed' }, rec.description),

          React.createElement('div', { className: 'pt-2 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60' },
            React.createElement('span', { className: 'text-xs text-slate-400 font-medium' }, rec.type),
            React.createElement('button', {
              onClick: () => applyRecommendation(rec.id),
              disabled: rec.applied,
              className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                rec.applied 
                  ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 cursor-default flex items-center gap-1.5' 
                  : 'gradient-bg-indigo text-white hover:opacity-90 shadow-md shadow-indigo-500/20'
              }`
            },
              rec.applied && React.createElement(Icon, { name: 'CheckCircle2', className: 'w-4 h-4' }),
              rec.applied ? 'Recommendation Applied!' : rec.actionLabel
            )
          )
        ))
      )
    ),

    // QUICK DEPOSIT MODAL
    depositModalGoal && React.createElement('div', {
      className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-xs'
    },
      React.createElement('div', {
        className: 'w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 animate-in zoom-in-95 duration-200'
      },
        React.createElement('div', { className: 'flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3' },
          React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' },
            `Deposit to ${depositModalGoal.title}`
          ),
          React.createElement('button', {
            onClick: () => setDepositModalGoal(null),
            className: 'p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white'
          }, React.createElement(Icon, { name: 'Plus', className: 'w-5 h-5 rotate-45' }))
        ),

        React.createElement('form', { onSubmit: handleDepositSubmit, className: 'space-y-4 text-xs sm:text-sm' },
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Deposit Amount ($)'),
            React.createElement('input', {
              type: 'number',
              step: '1',
              required: true,
              value: depositAmount,
              onChange: (e) => setDepositAmount(e.target.value),
              placeholder: '50.00',
              className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
            })
          ),

          React.createElement('div', { className: 'flex justify-end gap-2 pt-2' },
            React.createElement('button', {
              type: 'button',
              onClick: () => setDepositModalGoal(null),
              className: 'px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold'
            }, 'Cancel'),
            React.createElement('button', {
              type: 'submit',
              className: 'px-5 py-2 rounded-xl gradient-bg-emerald text-white font-bold shadow-md shadow-emerald-500/20'
            }, 'Confirm Deposit')
          )
        )
      )
    ),

    // ADD NEW GOAL MODAL
    isAddGoalOpen && React.createElement('div', {
      className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-xs'
    },
      React.createElement('div', {
        className: 'w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 animate-in zoom-in-95 duration-200'
      },
        React.createElement('div', { className: 'flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3' },
          React.createElement('h3', { className: 'font-bold text-base text-slate-900 dark:text-white' }, 'Create New Savings Goal'),
          React.createElement('button', {
            onClick: () => setIsAddGoalOpen(false),
            className: 'p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white'
          }, React.createElement(Icon, { name: 'Plus', className: 'w-5 h-5 rotate-45' }))
        ),

        React.createElement('form', { onSubmit: handleAddGoalSubmit, className: 'space-y-4 text-xs sm:text-sm' },
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Goal Name'),
            React.createElement('input', {
              type: 'text',
              required: true,
              value: goalTitle,
              onChange: (e) => setGoalTitle(e.target.value),
              placeholder: 'e.g. Concert Tickets 2026',
              className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
            })
          ),

          React.createElement('div', { className: 'grid grid-cols-2 gap-3' },
            React.createElement('div', { className: 'space-y-1' },
              React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Target Amount ($)'),
              React.createElement('input', {
                type: 'number',
                required: true,
                value: targetAmount,
                onChange: (e) => setTargetAmount(e.target.value),
                placeholder: '1500',
                className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
              })
            ),
            React.createElement('div', { className: 'space-y-1' },
              React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Initial Saved ($)'),
              React.createElement('input', {
                type: 'number',
                value: currentAmount,
                onChange: (e) => setCurrentAmount(e.target.value),
                placeholder: '0',
                className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
              })
            )
          ),

          React.createElement('div', { className: 'space-y-1' },
            React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Category Tag'),
            React.createElement('select', {
              value: category,
              onChange: (e) => setCategory(e.target.value),
              className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
            },
              ['General Savings', 'Safety Net', 'Travel', 'Tech', 'Investments', 'Lifestyle'].map((c, i) => React.createElement('option', { key: i, value: c }, c))
            )
          ),

          React.createElement('div', { className: 'flex justify-end gap-2 pt-2' },
            React.createElement('button', {
              type: 'button',
              onClick: () => setIsAddGoalOpen(false),
              className: 'px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold'
            }, 'Cancel'),
            React.createElement('button', {
              type: 'submit',
              className: 'px-5 py-2 rounded-xl gradient-bg-emerald text-white font-bold shadow-md shadow-emerald-500/20'
            }, 'Save Goal')
          )
        )
      )
    )
  );
}
