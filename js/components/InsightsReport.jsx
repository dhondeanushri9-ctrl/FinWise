// FinWise Insights & Financial Health Score Component

function InsightsReport({ data, onExportCSV, onExportJSON, iconHelper }) {
  const Icon = iconHelper;
  const { healthScore, user, summary, transactions } = data;

  const formatMoney = (val) => `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Health Insights & Reports 💡
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Empowering 0–100 wellness score breakdown and downloadable reports.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExportCSV}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <Icon name="Download" className="w-4 h-4 text-emerald-600" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={onExportJSON}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
          >
            <Icon name="FileText" className="w-4 h-4" />
            <span>Full JSON Report</span>
          </button>
        </div>
      </div>

      {/* Financial Health Score Hero Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white shadow-xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Gauge Meter Left */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center space-y-3">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="circle-meter-bg"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-emerald-400"
                  strokeWidth="8"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * healthScore.overallScore) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  style={{ transition: 'stroke-dashoffset 1.2s ease-in-out' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0.5">
                <span className="text-4xl font-extrabold tracking-tight text-white">{healthScore.overallScore}</span>
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">Out of 100</span>
              </div>
            </div>

            <div>
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
                {healthScore.ratingText}
              </span>
              <p className="text-xs text-slate-300 max-w-xs mx-auto mt-2 leading-relaxed">
                {healthScore.subtext}
              </p>
            </div>
          </div>

          {/* Factors Right */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Icon name="Activity" className="w-5 h-5 text-emerald-400" />
              Health Score Factors
            </h2>

            <div className="space-y-3">
              {healthScore.factors.map((factor, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white flex items-center gap-2">
                      <span>{factor.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px]">
                        {factor.status}
                      </span>
                    </span>
                    <span className="font-extrabold text-emerald-400">{factor.score} / 100</span>
                  </div>
                  <p className="text-[11px] text-slate-300">{factor.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spending Habits Text Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Highlights */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Icon name="ThumbsUp" className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">August Key Wins</h3>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed list-disc list-inside">
            <li>Dining out expenses decreased by <strong>18%</strong> compared to July.</li>
            <li>Saved <strong>$850</strong> from freelance design sprints directly into checking buffer.</li>
            <li>No penalty fees or late payments recorded.</li>
          </ul>
        </div>

        {/* Growth Areas */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <Icon name="Target" className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Growth Opportunities</h3>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed list-disc list-inside">
            <li>Weekend shopping trips account for <strong>74%</strong> of non-essential spend.</li>
            <li>3 active streaming services with redundant content.</li>
            <li>Coffee runs average 4.2 visits per week.</li>
          </ul>
        </div>

        {/* Action Plan */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <Icon name="Compass" className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Recommended Next Step</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Set an automated <strong>$50 weekly auto-save</strong> trigger. This small change will boost your overall Health Score from <strong>84 to 91</strong> within 60 days.
          </p>
        </div>
      </div>

      {/* Downloadable / Printable Report Placeholder Banner */}
      <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center shrink-0">
            <Icon name="Printer" className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Need an official summary for tax or budgeting?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Download a complete CSV log of all {transactions.length} transactions or export your full financial report in JSON format.</p>
          </div>
        </div>

        <button
          onClick={onExportCSV}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold transition-colors whitespace-nowrap"
        >
          Download CSV Log
        </button>
      </div>
    </div>
  );
}
