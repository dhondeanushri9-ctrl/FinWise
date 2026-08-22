// FinWise Expense Tracker Page Component

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';
import { CATEGORIES } from '../data/mockData.js';

export function ExpenseTrackerPage() {
  const { transactions, addTransaction, editTransaction, deleteTransaction } = useApp();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState('All'); // 'All', 'expense', 'income'

  // Modal State (Add & Edit)
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingTx, setEditingTx] = React.useState(null);

  // Form Fields
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState(CATEGORIES[0].name);
  const [date, setDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [type, setType] = React.useState('expense');
  const [merchant, setMerchant] = React.useState('');

  const openAddModal = () => {
    setEditingTx(null);
    setTitle('');
    setAmount('');
    setCategory(CATEGORIES[0].name);
    setDate(new Date().toISOString().split('T')[0]);
    setType('expense');
    setMerchant('');
    setIsModalOpen(true);
  };

  const openEditModal = (tx) => {
    setEditingTx(tx);
    setTitle(tx.title);
    setAmount(tx.amount.toString());
    setCategory(tx.category);
    setDate(tx.date);
    setType(tx.type);
    setMerchant(tx.merchant || '');
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    if (editingTx) {
      editTransaction(editingTx.id, { title, amount, category, date, type, merchant });
    } else {
      addTransaction({ title, amount, category, date, type, merchant });
    }

    setIsModalOpen(false);
  };

  // Filter transactions
  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (tx.merchant && tx.merchant.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || tx.category === selectedCategory;
    const matchesType = selectedType === 'All' || tx.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const totalFilteredAmount = filteredTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return React.createElement('div', { className: 'space-y-6 animate-in fade-in duration-300' },
    
    // Page Header & Add Button
    React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3' },
          'Expense Tracker',
          React.createElement('span', { className: 'text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' },
            'AI Auto-Categorized'
          )
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1' },
          'Manage, edit, and filter your transactions with intelligent tags.'
        )
      ),

      React.createElement('button', {
        onClick: openAddModal,
        className: 'px-4 py-2.5 rounded-xl gradient-bg-emerald text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:opacity-90 transition-all flex items-center gap-2 self-start sm:self-auto'
      },
        React.createElement(Icon, { name: 'Plus', className: 'w-4 h-4' }),
        React.createElement('span', null, 'New Transaction')
      )
    ),

    // Search Bar & Filter Controls Toolbar
    React.createElement('div', { className: 'glass-card rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row gap-3 items-center justify-between' },
      
      // Search Box
      React.createElement('div', { className: 'relative w-full md:w-72' },
        React.createElement(Icon, { name: 'Search', className: 'w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' }),
        React.createElement('input', {
          type: 'text',
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          placeholder: 'Search merchant or title...',
          className: 'w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
        })
      ),

      // Dropdown Filters
      React.createElement('div', { className: 'flex flex-wrap items-center gap-2 w-full md:w-auto justify-end' },
        
        // Category Select
        React.createElement('div', { className: 'flex items-center gap-1.5' },
          React.createElement(Icon, { name: 'Filter', className: 'w-3.5 h-3.5 text-slate-400' }),
          React.createElement('select', {
            value: selectedCategory,
            onChange: (e) => setSelectedCategory(e.target.value),
            className: 'px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
          },
            React.createElement('option', { value: 'All' }, 'All Categories'),
            CATEGORIES.map((cat, i) => React.createElement('option', { key: i, value: cat.name }, cat.name))
          )
        ),

        // Type Filter Pills
        React.createElement('div', { className: 'flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60' },
          ['All', 'expense', 'income'].map((t) => React.createElement('button', {
            key: t,
            onClick: () => setSelectedType(t),
            className: `px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
              selectedType === t 
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`
          }, t === 'All' ? 'All Types' : t))
        )
      )
    ),

    // Transactions Counter Summary
    React.createElement('div', { className: 'flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1' },
      React.createElement('span', null, `Showing ${filteredTransactions.length} of ${transactions.length} transactions`),
      React.createElement('span', null, `Filtered Expense Total: $${totalFilteredAmount.toFixed(2)}`)
    ),

    // TRANSACTIONS LIST TABLE
    React.createElement('div', { className: 'glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs' },
      filteredTransactions.length === 0 
        ? React.createElement('div', { className: 'p-12 text-center space-y-3' },
            React.createElement(Icon, { name: 'Search', className: 'w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto' }),
            React.createElement('h3', { className: 'font-bold text-slate-700 dark:text-slate-300' }, 'No transactions found'),
            React.createElement('p', { className: 'text-xs text-slate-400' }, 'Try clearing your search query or filters.')
          )
        : React.createElement('div', { className: 'overflow-x-auto' },
            React.createElement('table', { className: 'w-full text-left border-collapse' },
              React.createElement('thead', null,
                React.createElement('tr', { className: 'bg-slate-100/70 dark:bg-slate-800/70 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800' },
                  React.createElement('th', { className: 'py-3.5 px-4' }, 'Transaction'),
                  React.createElement('th', { className: 'py-3.5 px-4' }, 'Category'),
                  React.createElement('th', { className: 'py-3.5 px-4' }, 'Date'),
                  React.createElement('th', { className: 'py-3.5 px-4 text-right' }, 'Amount'),
                  React.createElement('th', { className: 'py-3.5 px-4 text-center' }, 'Actions')
                )
              ),
              React.createElement('tbody', { className: 'divide-y divide-slate-200/60 dark:divide-slate-800/60 text-xs sm:text-sm' },
                filteredTransactions.map(tx => {
                  const catObj = CATEGORIES.find(c => c.name === tx.category) || CATEGORIES[0];
                  const isIncome = tx.type === 'income';

                  return React.createElement('tr', {
                    key: tx.id,
                    className: 'hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors'
                  },
                    // Title & Merchant
                    React.createElement('td', { className: 'py-3.5 px-4' },
                      React.createElement('div', { className: 'flex items-center gap-3' },
                        React.createElement('div', {
                          style: { backgroundColor: `${catObj.color}15`, color: catObj.color },
                          className: 'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold'
                        }, React.createElement(Icon, { name: catObj.icon, className: 'w-4 h-4' })),
                        React.createElement('div', null,
                          React.createElement('p', { className: 'font-bold text-slate-900 dark:text-white' }, tx.title),
                          tx.merchant && React.createElement('p', { className: 'text-[11px] text-slate-400' }, tx.merchant)
                        )
                      )
                    ),

                    // Category & Tag Badge
                    React.createElement('td', { className: 'py-3.5 px-4' },
                      React.createElement('div', { className: 'flex items-center gap-2' },
                        React.createElement('span', { className: `px-2.5 py-1 rounded-full text-[11px] font-semibold ${catObj.bg} ${catObj.text}` },
                          tx.category
                        ),
                        tx.autoTagged && React.createElement('span', {
                          title: 'Auto-categorized by AI engine',
                          className: 'text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                        }, 'AI Tagged')
                      )
                    ),

                    // Date
                    React.createElement('td', { className: 'py-3.5 px-4 text-slate-600 dark:text-slate-400 font-medium' },
                      tx.date
                    ),

                    // Amount
                    React.createElement('td', { className: `py-3.5 px-4 text-right font-extrabold ${isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}` },
                      `${isIncome ? '+' : '-'}$${tx.amount.toFixed(2)}`
                    ),

                    // Actions (Edit / Delete)
                    React.createElement('td', { className: 'py-3.5 px-4 text-center' },
                      React.createElement('div', { className: 'flex items-center justify-center gap-1' },
                        React.createElement('button', {
                          onClick: () => openEditModal(tx),
                          ariaLabel: 'Edit transaction',
                          className: 'p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                        }, React.createElement(Icon, { name: 'Edit3', className: 'w-4 h-4' })),
                        React.createElement('button', {
                          onClick: () => deleteTransaction(tx.id),
                          ariaLabel: 'Delete transaction',
                          className: 'p-1.5 rounded-lg text-rose-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors'
                        }, React.createElement(Icon, { name: 'Trash2', className: 'w-4 h-4' }))
                      )
                    )
                  );
                })
              )
            )
          )
    ),

    // ADD / EDIT TRANSACTION MODAL
    isModalOpen && React.createElement('div', {
      className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-xs'
    },
      React.createElement('div', {
        className: 'w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 animate-in zoom-in-95 duration-200'
      },
        React.createElement('div', { className: 'flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3' },
          React.createElement('h3', { className: 'font-bold text-lg text-slate-900 dark:text-white' },
            editingTx ? 'Edit Transaction' : 'Add New Transaction'
          ),
          React.createElement('button', {
            onClick: () => setIsModalOpen(false),
            className: 'p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white'
          }, React.createElement(Icon, { name: 'Plus', className: 'w-5 h-5 rotate-45' }))
        ),

        React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-4 text-xs sm:text-sm' },
          
          // Type Toggle (Expense vs Income)
          React.createElement('div', { className: 'flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl' },
            React.createElement('button', {
              type: 'button',
              onClick: () => setType('expense'),
              className: `flex-1 py-2 rounded-lg font-bold transition-all ${type === 'expense' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500'}`
            }, 'Expense'),
            React.createElement('button', {
              type: 'button',
              onClick: () => setType('income'),
              className: `flex-1 py-2 rounded-lg font-bold transition-all ${type === 'income' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-500'}`
            }, 'Income')
          ),

          // Title
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Title / Description'),
            React.createElement('input', {
              type: 'text',
              required: true,
              value: title,
              onChange: (e) => setTitle(e.target.value),
              placeholder: 'e.g. Trader Joe’s Groceries',
              className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
            })
          ),

          // Amount & Date
          React.createElement('div', { className: 'grid grid-cols-2 gap-3' },
            React.createElement('div', { className: 'space-y-1' },
              React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Amount ($)'),
              React.createElement('input', {
                type: 'number',
                step: '0.01',
                required: true,
                value: amount,
                onChange: (e) => setAmount(e.target.value),
                placeholder: '0.00',
                className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
              })
            ),
            React.createElement('div', { className: 'space-y-1' },
              React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Date'),
              React.createElement('input', {
                type: 'date',
                required: true,
                value: date,
                onChange: (e) => setDate(e.target.value),
                className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
              })
            )
          ),

          // Category
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Category'),
            React.createElement('select', {
              value: category,
              onChange: (e) => setCategory(e.target.value),
              className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
            },
              CATEGORIES.map((cat, i) => React.createElement('option', { key: i, value: cat.name }, cat.name))
            )
          ),

          // Merchant (Optional)
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('label', { className: 'font-semibold text-slate-700 dark:text-slate-300' }, 'Merchant Name (Optional)'),
            React.createElement('input', {
              type: 'text',
              value: merchant,
              onChange: (e) => setMerchant(e.target.value),
              placeholder: 'e.g. Starbucks, Uber',
              className: 'w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent'
            })
          ),

          // Submit Actions
          React.createElement('div', { className: 'flex justify-end gap-2 pt-2' },
            React.createElement('button', {
              type: 'button',
              onClick: () => setIsModalOpen(false),
              className: 'px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold'
            }, 'Cancel'),
            React.createElement('button', {
              type: 'submit',
              className: 'px-5 py-2.5 rounded-xl gradient-bg-emerald text-white font-bold shadow-md shadow-emerald-500/20 hover:opacity-90'
            }, editingTx ? 'Save Changes' : 'Add Transaction')
          )
        )
      )
    )
  );
}
