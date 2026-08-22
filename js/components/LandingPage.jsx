// FinWise Landing Page Component

function LandingPage({ onLaunchApp, iconHelper }) {
  const Icon = iconHelper;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Top Header Banner */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white text-xs md:text-sm font-medium py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="bg-emerald-800/60 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider">New</span>
        <span>FinWise AI 2.0 is live — Predictive budgeting with zero financial anxiety!</span>
        <button 
          onClick={onLaunchApp}
          className="underline font-semibold hover:text-emerald-200 ml-2 inline-flex items-center gap-1"
        >
          Try Demo <Icon name="ArrowRight" className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/20 to-teal-300/20 dark:from-emerald-900/30 dark:to-teal-900/20 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold">
              <Icon name="Sparkles" className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
              <span>Friendly AI Financial Companion for Young Adults</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Take control of your money with <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent">Zero Judgment</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              No complicated corporate spreadsheets or harsh guilt trips. FinWise helps you track spending, forecast future savings, and reach your goals with gentle, personalized AI insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onLaunchApp}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>Launch Interactive Dashboard</span>
                <Icon name="ArrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="PlayCircle" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">$340/mo</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Avg. Saved per User</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">84 / 100</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Avg. Health Score</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Guilt-Free Advice</p>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Glass Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xl p-6 space-y-6 glow-emerald">
              {/* Card Top */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold text-lg">
                    FW
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">FinWise AI Assistant</h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active & Monitoring
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  Score: 84
                </span>
              </div>

              {/* Simulated AI Insight */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <Icon name="Sparkles" className="w-4 h-4" />
                  <span>AI Insight of the Day</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  "You spent 18% less on dining this week! Transferring $45 to your <strong className="text-slate-900 dark:text-white">Japan Vacation</strong> goal keeps you 3 weeks ahead of schedule."
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <button onClick={onLaunchApp} className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                    + Transfer $45 Now
                  </button>
                  <span className="text-[11px] text-slate-400">Just now</span>
                </div>
              </div>

              {/* Simulated Goal Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Icon name="ShieldCheck" className="w-4 h-4 text-emerald-500" />
                    Emergency Cushion Goal
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">$2,400 / $5,000</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[48%] transition-all duration-500" />
                </div>
              </div>

              {/* Quick Launch CTA Banner inside card */}
              <button
                onClick={onLaunchApp}
                className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Enter Live Dashboard</span>
                <Icon name="ChevronRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Designed for how young adults spend today
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Say goodbye to stressful financial apps. FinWise turns raw transactions into actionable, encouraging growth steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Icon name="Tag" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Smart Auto-Categorization</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Transactions from Apple Pay, coffee shops, and rideshares are instantly tagged with smart category icons and flags.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Icon name="TrendingUp" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">30/60/90 Day Forecasts</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                See where your cash flow is headed next month. Test "What-If" scenarios before making major buying decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Icon name="Target" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Guilt-Free Savings Goals</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Build emergency buffers, travel funds, or concert savings with visual progress bars and zero shame.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Icon name="Activity" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Financial Health Score</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Get a simple 0–100 health gauge based on savings rate, fixed overhead, and spending velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "How It Works" 3-Step Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How FinWise Works in 3 Easy Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            No complex setup required. Start organizing your money in under 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-emerald-500/20">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Connect or Add Expenses</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Add transactions manually or use sample accounts. FinWise auto-organizes your purchases into clean categories.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-teal-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-teal-500/20">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get Friendly AI Insights</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Receive short, encouraging micro-tips on where to optimize subscription spending or redirect coffee change.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-indigo-500/20">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Watch Your Savings Grow</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Track progress bars on your trip funds and emergency buffers with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action Footer Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to make money management feel good?
          </h2>
          <p className="text-emerald-100 max-w-xl mx-auto text-base sm:text-lg">
            Join thousands of young adults building better financial habits without the stress.
          </p>
          <div className="pt-2">
            <button
              onClick={onLaunchApp}
              className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-extrabold text-base shadow-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              <span>Explore FinWise App Now</span>
              <Icon name="ArrowRight" className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <p>© 2026 FinWise AI — Financial Wellness for Young Adults. All insights are simulated for educational wellness.</p>
      </footer>
    </div>
  );
}
