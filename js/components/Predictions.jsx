// FinWise Predictions & Forecasting Component

function Predictions({ data, iconHelper }) {
  const Icon = iconHelper;
  const { forecast30, forecast60, forecast90, summary } = data;

  // Horizon State: 30, 60, 90
  const [horizon, setHorizon] = React.useState(90);

  // What-If Simulator Inputs
  const [diningReduction, setDiningReduction] = React.useState(15); // %
  const [cancelSubs, setCancelSubs] = React.useState(true); // $25/mo
  const [autoSaveEnabled, setAutoSaveEnabled] = React.useState(false); // $200/mo

  // Select Forecast Dataset
  const rawDataset = horizon === 30 ? forecast30 : horizon === 60 ? forecast60 : forecast90;

  // Calculate Scenario Impact
  const monthlyDiningAvg = 480; // $480/mo average dining
  const diningMonthlySavings = (monthlyDiningAvg * (diningReduction / 100));
  const subsMonthlySavings = cancelSubs ? 25 : 0;
  const autoSaveAdd = autoSaveEnabled ? 200 : 0;

  const totalMonthlySavings = diningMonthlySavings + subsMonthlySavings;
  const horizonMonths = horizon / 30;
  const projectedHorizonTotalSavings = totalMonthlySavings * horizonMonths;

  // Adjust Forecast chart dataset according to scenario slider
  const adjustedDataset = rawDataset.map(item => {
    const reductionFactor = (totalMonthlySavings * (horizon / 90)) / rawDataset.length;
    return {
      ...item,
      baseline: item.projected,
      optimized: Math.max(summary.monthlySpending, item.projected - (totalMonthlySavings * (parseInt(item.day.replace("Day ", "")) || 15) / 30))
    };
  });

  const formatMoney = (val) => `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictions & Predictive Forecasting 🔮
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Projected spending trends for the next 30, 60, and 90 days with interactive scenario modeling.
          </p>
        </div>

        {/* Horizon Tabs */}
        <div className="flex rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1.5 shadow-sm">
          {[30, 60, 90].map((days) => (
            <button
              key={days}
              onClick={() => setHorizon(days)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${horizon === days ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              {days} Days Horizon
            </button>
          ))}
        </div>
      </div>

      {/* Main Forecast Chart Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold">
                {horizon}-Day AI Spend Projection
              </span>
              <span className="text-xs text-slate-400 font-medium">Confidence: 94%</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              Projected Spend Trajectory
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-slate-600 dark:text-slate-400">Baseline Trend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Optimized Scenario</span>
            </div>
          </div>
        </div>

        {/* Recharts Area/Line Chart */}
        <div className="h-72 w-full">
          {window.Recharts ? (
            <window.Recharts.ResponsiveContainer width="100%" height="100%">
              <window.Recharts.AreaChart data={adjustedDataset} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="optGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <window.Recharts.CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.15} />
                <window.Recharts.XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <window.Recharts.YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <window.Recharts.Tooltip 
                  formatter={(val) => [`$${Number(val).toFixed(2)}`, 'Cumulative Spending']}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <window.Recharts.Line type="monotone" dataKey="baseline" name="Baseline Projection ($)" stroke="#6366f1" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                <window.Recharts.Area type="monotone" dataKey="optimized" name="Optimized Spend ($)" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#optGrad)" />
              </window.Recharts.AreaChart>
            </window.Recharts.ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 text-sm">
              Loading Forecast Chart...
            </div>
          )}
        </div>

        {/* Forecast Summary Banner */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Standard Baseline Spend</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {formatMoney(rawDataset[rawDataset.length - 1].projected)}
            </p>
          </div>
          <div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Optimized Spend</p>
            <p className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
              {formatMoney(adjustedDataset[adjustedDataset.length - 1].optimized)}
            </p>
          </div>
          <div>
            <p className="text-xs text-indigo-500 font-bold">Projected Net Savings</p>
            <p className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">
              +{formatMoney(projectedHorizonTotalSavings)}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive "What-If" Scenario Simulator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <Icon name="Sliders" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              "What-If" Scenario Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Adjust sliders and toggles to see instant real-time impacts on your {horizon}-day forecast.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Controls 1: Dining Slider */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Icon name="Utensils" className="w-4 h-4 text-emerald-500" />
                Reduce Dining Out
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">{diningReduction}% less</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={diningReduction}
              onChange={(e) => setDiningReduction(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Saves <strong className="text-slate-900 dark:text-white">{formatMoney(diningMonthlySavings)}/mo</strong> without eliminating weekend treats.
            </p>
          </div>

          {/* Controls 2: Cancel Unused Subscriptions */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Icon name="Tv" className="w-4 h-4 text-indigo-500" />
                Streamline Subscriptions
              </span>
              <input
                type="checkbox"
                checked={cancelSubs}
                onChange={(e) => setCancelSubs(e.target.checked)}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Pause 1 redundant streaming service ($25/mo).
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Annual impact: <strong className="text-indigo-600 dark:text-indigo-400">$300 saved/yr</strong>
            </p>
          </div>

          {/* Controls 3: Auto-Save Boost */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Icon name="Zap" className="w-4 h-4 text-teal-500" />
                Enable $50/Wk Auto-Save
              </span>
              <input
                type="checkbox"
                checked={autoSaveEnabled}
                onChange={(e) => setAutoSaveEnabled(e.target.checked)}
                className="w-4 h-4 accent-teal-600 rounded cursor-pointer"
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Sweeps $50 weekly directly into High-Yield Savings.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Target boost: <strong className="text-teal-600 dark:text-teal-400">+$600 in 90 days</strong>
            </p>
          </div>
        </div>
      </div>

      {/* "If this trend continues..." Messaging Cards */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl space-y-4 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
          <Icon name="Sparkles" className="w-4 h-4 text-indigo-400" />
          <span>If this trend continues...</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h3 className="text-xl font-bold text-white">
              You will reach your Emergency Cushion goal 2 months early! 🎉
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Based on your last 6 months of historical spending and your {horizon}-day forecast, you have a consistent $710 monthly surplus. We recommend locking in a $250 automatic monthly allocation to accelerate your Japan Spring Trip fund.
            </p>
          </div>

          <div className="md:col-span-4 text-right">
            <button className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition-all hover:scale-105">
              + Automate $250 Goal Allocation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
