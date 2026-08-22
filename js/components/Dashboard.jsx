// FinWise Main App Dashboard Component

function Dashboard({ data, onNavigate, onApplyTip, iconHelper }) {
  const Icon = iconHelper;
  const { summary, aiDailyTip, categories, transactions, historicalTrends, upcomingBills } = data;

  // Prepare Pie Chart Data for Recharts
  const pieData = categories
    .filter(c => c.spent > 0)
    .map(c => ({
      name: c.name,
      value: c.spent,
      color: c.color
    }));

  const totalCategorySpent = pieData.reduce((acc, cur) => acc + cur.value, 0);

  // Format currency helper
  const formatMoney = (val) => `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Greeting & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Welcome back, {data.user.name.split(' ')[0]} 👋
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Here is your financial pulse for August. You're doing great!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("expenses")}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
          >
            <Icon name="Plus" className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
          <button
            onClick={() => onNavigate("savings")}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <Icon name="PiggyBank" className="w-4 h-4 text-teal-500" />
            <span>Savings Goals</span>
          </button>
        </div>
      </div>

      {/* 4 Key Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Total Balance */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover-lift space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Balance</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Icon name="Wallet" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {formatMoney(summary.totalBalance)}
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <Icon name="TrendingUp" className="w-3.5 h-3.5" />
              <span>+$850.00 this month</span>
            </p>
          </div>
        </div>

        {/* Card 2: Monthly Spending */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover-lift space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Monthly Spend</span>
            <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Icon name="CreditCard" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {formatMoney(summary.monthlySpending)}
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <Icon name="ArrowDownRight" className="w-3.5 h-3.5" />
              <span>4.2% less than last month</span>
            </p>
          </div>
        </div>

        {/* Card 3: Savings Rate */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover-lift space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Savings Rate</span>
            <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Icon name="PiggyBank" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {summary.savingsRate}%
            </p>
            <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold mt-1 flex items-center gap-1">
              <Icon name="TrendingUp" className="w-3.5 h-3.5" />
              <span>+3.1% above target</span>
            </p>
          </div>
        </div>

        {/* Card 4: Upcoming Bills */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover-lift space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Upcoming Bills</span>
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Icon name="Calendar" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {formatMoney(summary.upcomingBillsTotal)}
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1 flex items-center gap-1">
              <Icon name="Clock" className="w-3.5 h-3.5" />
              <span>3 bills due next 14 days</span>
            </p>
          </div>
        </div>
      </div>

      {/* AI Insight of the Day Card */}
      {aiDailyTip && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-indigo-950/40 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm space-y-4 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/30 animate-subtle-pulse">
                <Icon name="Sparkles" className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
                    AI Insight of the Day
                  </span>
                  <span className="text-xs text-slate-400 font-medium">• {aiDailyTip.category}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {aiDailyTip.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
                  "{aiDailyTip.text}"
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              {aiDailyTip.actionLabel && (
                <button
                  onClick={() => onApplyTip && onApplyTip(aiDailyTip)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/25 transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Icon name="CheckCircle" className="w-4 h-4" />
                  <span>{aiDailyTip.actionLabel}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Visual Analytics Grid: Pie Chart & Area Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Monthly Spending Trend (Line/Area Chart) */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Icon name="TrendingUp" className="w-5 h-5 text-emerald-500" />
                Monthly Cash Flow Trend
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Last 6 months (Income vs. Spending)</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold">
              6-Month View
            </span>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-64 w-full">
            {window.Recharts ? (
              <window.Recharts.ResponsiveContainer width="100%" height="100%">
                <window.Recharts.AreaChart data={historicalTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="spendingGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <window.Recharts.CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.15} />
                  <window.Recharts.XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <window.Recharts.YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <window.Recharts.Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      borderColor: '#334155', 
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '12px'
                    }} 
                  />
                  <window.Recharts.Area type="monotone" dataKey="income" name="Income ($)" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#incomeGrad)" />
                  <window.Recharts.Area type="monotone" dataKey="spending" name="Spending ($)" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#spendingGrad)" />
                </window.Recharts.AreaChart>
              </window.Recharts.ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                Loading Chart Component...
              </div>
            )}
          </div>
        </div>

        {/* Category Breakdown (Donut/Pie Chart) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Icon name="PieChart" className="w-5 h-5 text-indigo-500" />
                Spending Breakdown
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">By category this month</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {formatMoney(totalCategorySpent)} Total
            </span>
          </div>

          <div className="h-52 w-full relative">
            {window.Recharts ? (
              <window.Recharts.ResponsiveContainer width="100%" height="100%">
                <window.Recharts.PieChart>
                  <window.Recharts.Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <window.Recharts.Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </window.Recharts.Pie>
                  <window.Recharts.Tooltip 
                    formatter={(val) => [`$${val.toFixed(2)}`, 'Spent']}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  />
                </window.Recharts.PieChart>
              </window.Recharts.ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                Loading Category Chart...
              </div>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-slate-400 uppercase font-semibold">August</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{formatMoney(totalCategorySpent)}</span>
            </div>
          </div>

          {/* Custom Category List */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-700/60">
            {pieData.slice(0, 6).map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                <span className="text-slate-600 dark:text-slate-300 font-medium truncate">{c.name}</span>
                <span className="font-bold text-slate-900 dark:text-white ml-auto">
                  {Math.round((c.value / (totalCategorySpent || 1)) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Transactions & Upcoming Bills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Transactions List */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Icon name="List" className="w-5 h-5 text-teal-500" />
                Recent Activity
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Latest tagged expenses & deposits</p>
            </div>
            <button
              onClick={() => onNavigate("expenses")}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>View All Tracker</span>
              <Icon name="ChevronRight" className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
            {transactions.slice(0, 5).map((tx) => (
              <div key={tx.id} className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 dark:hover:bg-slate-700/30 px-2 rounded-xl transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${tx.type === 'income' ? 'bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400' : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300'}`}>
                    <Icon name={tx.type === 'income' ? 'ArrowDownLeft' : 'ShoppingBag'} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{tx.merchant}</p>
                      {tx.autoTag && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold">
                          {tx.autoTagLabel || "AI Tagged"}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>{tx.date}</span>
                      <span>•</span>
                      <span>{tx.category}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className={`text-sm font-extrabold ${tx.type === 'income' ? 'text-teal-600 dark:text-teal-400' : 'text-slate-900 dark:text-white'}`}>
                    {tx.type === 'income' ? '+' : '-'}{formatMoney(tx.amount)}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate max-w-[120px]">{tx.paymentMethod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bills Sidebar Card */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Icon name="Bell" className="w-5 h-5 text-amber-500" />
              Upcoming Bills
            </h2>
            <span className="text-xs text-slate-400 font-medium">3 Pending</span>
          </div>

          <div className="space-y-3">
            {upcomingBills.map((bill) => (
              <div key={bill.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Icon name={bill.icon || "Calendar"} className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{bill.name}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Due {bill.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {formatMoney(bill.amount)}
                  </p>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-full">
                    {bill.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-1">
            <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">Autopay Protection Active</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400">All 3 bills fit safely within your checking cushion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
