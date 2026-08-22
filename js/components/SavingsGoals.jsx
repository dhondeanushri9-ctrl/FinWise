// FinWise Savings Recommendations & Goals Tracker Component

function SavingsGoals({ data, onAddGoal, onDepositGoal, onAcceptRecommendation, iconHelper }) {
  const Icon = iconHelper;
  const { aiRecommendations, savingsGoals } = data;

  // Add Goal Modal State
  const [isAddGoalOpen, setIsAddGoalOpen] = React.useState(false);
  const [goalTitle, setGoalTitle] = React.useState("");
  const [goalCategory, setGoalCategory] = React.useState("Safety Net");
  const [goalTarget, setGoalTarget] = React.useState("");
  const [goalInitial, setGoalInitial] = React.useState("");
  const [goalDate, setGoalDate] = React.useState("2026-12-31");
  const [goalColor, setGoalColor] = React.useState("emerald");

  // Deposit Modal State
  const [depositGoalItem, setDepositGoalItem] = React.useState(null);
  const [depositAmount, setDepositAmount] = React.useState("");

  // Dismissed Recommendation local state
  const [dismissedRecs, setDismissedRecs] = React.useState([]);

  // Submit New Goal
  const handleSubmitNewGoal = (e) => {
    e.preventDefault();
    if (!goalTitle.trim() || !goalTarget || isNaN(goalTarget)) return;

    const initialVal = parseFloat(goalInitial) || 0;
    const targetVal = parseFloat(goalTarget);

    const newGoal = {
      id: `goal-${Date.now()}`,
      title: goalTitle.trim(),
      category: goalCategory,
      currentAmount: initialVal,
      targetAmount: targetVal,
      targetDate: goalDate,
      color: goalColor,
      bgGradient: goalColor === 'emerald' ? 'from-emerald-500 to-teal-600' :
                  goalColor === 'indigo' ? 'from-indigo-500 to-purple-600' :
                  goalColor === 'blue' ? 'from-blue-500 to-cyan-600' : 'from-pink-500 to-rose-600',
      icon: goalCategory === 'Safety Net' ? 'ShieldCheck' : goalCategory === 'Travel & Fun' ? 'Plane' : 'Target',
      monthlyContribution: Math.round((targetVal - initialVal) / 6),
      note: "Custom goal created by user"
    };

    onAddGoal(newGoal);
    setIsAddGoalOpen(false);
    setGoalTitle("");
    setGoalTarget("");
    setGoalInitial("");
  };

  // Submit Deposit
  const handleSubmitDeposit = (e) => {
    e.preventDefault();
    if (!depositGoalItem || !depositAmount || isNaN(depositAmount)) return;

    onDepositGoal(depositGoalItem.id, parseFloat(depositAmount));
    setDepositGoalItem(null);
    setDepositAmount("");
  };

  const activeRecommendations = aiRecommendations.filter(r => !dismissedRecs.includes(r.id));
  const formatMoney = (val) => `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Savings Recommendations & Goals 🌱
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Personalized micro-suggestions and visual goal trackers to reach targets anxiety-free.
          </p>
        </div>

        <button
          onClick={() => setIsAddGoalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="PlusCircle" className="w-5 h-5" />
          <span>+ Create New Goal</span>
        </button>
      </div>

      {/* AI-Generated Savings Recommendations Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center font-bold">
              <Icon name="Sparkles" className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              AI Smart Savings Recommendations
            </h2>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            {activeRecommendations.length} Recommendations Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activeRecommendations.map((rec) => (
            <div
              key={rec.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover-lift space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    {rec.category}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Est. Monthly Savings</span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      +{formatMoney(rec.savingsMonthly)}/mo
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={rec.icon || "PiggyBank"} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{rec.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setDismissedRecs([...dismissedRecs, rec.id])}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold"
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    onAcceptRecommendation && onAcceptRecommendation(rec);
                    setDismissedRecs([...dismissedRecs, rec.id]);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
                >
                  <Icon name="Check" className="w-3.5 h-3.5" />
                  <span>{rec.actionText || "Apply Recommendation"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Goals Tracker Grid */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Icon name="Target" className="w-5 h-5 text-indigo-500" />
            Active Savings Goals
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {savingsGoals.length} Active Goals
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {savingsGoals.map((goal) => {
            const percent = Math.min(100, Math.round((goal.currentAmount / (goal.targetAmount || 1)) * 100));

            return (
              <div
                key={goal.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover-lift space-y-5 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${goal.bgGradient}`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[11px] font-bold">
                      {goal.category}
                    </span>
                    <span className="text-[11px] text-slate-400">Target: {goal.targetDate}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${goal.bgGradient} text-white flex items-center justify-center shadow-md`}>
                      <Icon name={goal.icon || "ShieldCheck"} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{goal.title}</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{goal.note}</p>
                    </div>
                  </div>

                  {/* Amounts & Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {formatMoney(goal.currentAmount)}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        of {formatMoney(goal.targetAmount)}
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden p-0.5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${goal.bgGradient} transition-all duration-700`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 pt-1">
                      <span>{percent}% Completed</span>
                      <span className="text-emerald-600 dark:text-emerald-400">+{formatMoney(goal.monthlyContribution)}/mo</span>
                    </div>
                  </div>
                </div>

                {/* Quick Deposit Action */}
                <button
                  onClick={() => setDepositGoalItem(goal)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Icon name="Plus" className="w-4 h-4 text-emerald-500" />
                  <span>+ Deposit Funds</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Goal Modal */}
      {isAddGoalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Icon name="Target" className="w-5 h-5 text-emerald-600" />
                Create Savings Goal
              </h3>
              <button onClick={() => setIsAddGoalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="X" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitNewGoal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Goal Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. New Electric Bike, Emergency Fund"
                  value={goalTitle}
                  onChange={(e) => setGoalTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Amount ($) *</label>
                  <input
                    type="number"
                    step="10"
                    required
                    placeholder="2500"
                    value={goalTarget}
                    onChange={(e) => setGoalTarget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Initial Deposit ($)</label>
                  <input
                    type="number"
                    step="10"
                    placeholder="200"
                    value={goalInitial}
                    onChange={(e) => setGoalInitial(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                  <select
                    value={goalCategory}
                    onChange={(e) => setGoalCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Safety Net">Safety Net</option>
                    <option value="Travel & Fun">Travel & Fun</option>
                    <option value="Career & Tech">Career & Tech</option>
                    <option value="Lifestyle">Lifestyle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Date</label>
                  <input
                    type="date"
                    value={goalDate}
                    onChange={(e) => setGoalDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setIsAddGoalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-600/25"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Deposit Modal */}
      {depositGoalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Deposit to {depositGoalItem.title}
              </h3>
              <button onClick={() => setDepositGoalItem(null)} className="text-slate-400 hover:text-slate-600">
                <Icon name="X" className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmitDeposit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Deposit Amount ($)
                </label>
                <input
                  type="number"
                  step="5"
                  required
                  autoFocus
                  placeholder="50"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setDepositGoalItem(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-600/25"
                >
                  Confirm Deposit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
