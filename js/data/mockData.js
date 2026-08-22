// FinWise Mock Initial Data

export const INITIAL_TRANSACTIONS = [
  { id: 'tx-1', title: 'Whole Foods Market', amount: 84.50, category: 'Food & Groceries', date: '2026-08-21', autoTagged: true, type: 'expense', merchant: 'Whole Foods' },
  { id: 'tx-2', title: 'Apt 4B Monthly Rent', amount: 1450.00, category: 'Housing & Rent', date: '2026-08-01', autoTagged: true, type: 'expense', merchant: 'Urban Leasing' },
  { id: 'tx-3', title: 'Monthly Salary Deposit', amount: 4800.00, category: 'Income', date: '2026-08-15', autoTagged: true, type: 'income', merchant: 'TechCorp Inc' },
  { id: 'tx-4', title: 'Starbucks Coffee', amount: 6.75, category: 'Food & Groceries', date: '2026-08-20', autoTagged: true, type: 'expense', merchant: 'Starbucks' },
  { id: 'tx-5', title: 'Spotify Premium Family', amount: 16.99, category: 'Subscriptions', date: '2026-08-12', autoTagged: true, type: 'expense', merchant: 'Spotify' },
  { id: 'tx-6', title: 'Uber Ride to Downtown', amount: 24.30, category: 'Transportation', date: '2026-08-19', autoTagged: true, type: 'expense', merchant: 'Uber' },
  { id: 'tx-7', title: 'AMC Cinema Tickets', amount: 32.00, category: 'Entertainment', date: '2026-08-18', autoTagged: true, type: 'expense', merchant: 'AMC Theatres' },
  { id: 'tx-8', title: 'Nike Running Shoes', amount: 120.00, category: 'Shopping', date: '2026-08-14', autoTagged: true, type: 'expense', merchant: 'Nike Store' },
  { id: 'tx-9', title: 'ConEd Power Electric Bill', amount: 78.40, category: 'Utilities', date: '2026-08-10', autoTagged: true, type: 'expense', merchant: 'ConEd Utilities' },
  { id: 'tx-10', title: 'Freelance Design Payout', amount: 650.00, category: 'Income', date: '2026-08-08', autoTagged: true, type: 'income', merchant: 'Studio Design' },
  { id: 'tx-11', title: 'Trader Joe’s Groceries', amount: 62.10, category: 'Food & Groceries', date: '2026-08-07', autoTagged: true, type: 'expense', merchant: 'Trader Joe’s' },
  { id: 'tx-12', title: 'Netflix Subscription', amount: 15.49, category: 'Subscriptions', date: '2026-08-04', autoTagged: true, type: 'expense', merchant: 'Netflix' },
  { id: 'tx-13', title: 'Equinox Gym Membership', amount: 135.00, category: 'Health & Fitness', date: '2026-08-02', autoTagged: true, type: 'expense', merchant: 'Equinox' }
];

export const CATEGORIES = [
  { name: 'Food & Groceries', color: '#10B981', icon: 'Utensils', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'Housing & Rent', color: '#6366F1', icon: 'Home', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400' },
  { name: 'Transportation', color: '#F59E0B', icon: 'Car', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400' },
  { name: 'Subscriptions', color: '#8B5CF6', icon: 'Tv', bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400' },
  { name: 'Entertainment', color: '#EC4899', icon: 'Film', bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400' },
  { name: 'Shopping', color: '#3B82F6', icon: 'ShoppingBag', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
  { name: 'Utilities', color: '#14B8A6', icon: 'Zap', bg: 'bg-teal-500/10', text: 'text-teal-600 dark:text-teal-400' },
  { name: 'Health & Fitness', color: '#F43F5E', icon: 'HeartPulse', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400' },
  { name: 'Income', color: '#22C55E', icon: 'TrendingUp', bg: 'bg-green-500/10', text: 'text-green-600 dark:text-green-400' }
];

export const INITIAL_SAVINGS_GOALS = [
  { id: 'goal-1', title: 'Emergency Cushion Fund', targetAmount: 3000, currentAmount: 2150, category: 'Safety Net', color: 'emerald', targetDate: '2026-11-30', monthlyContribution: 250 },
  { id: 'goal-2', title: 'Japan Trip 2027', targetAmount: 2500, currentAmount: 1400, category: 'Travel', color: 'indigo', targetDate: '2027-04-15', monthlyContribution: 200 },
  { id: 'goal-3', title: 'MacBook Pro M4 Upgrade', targetAmount: 2000, currentAmount: 850, category: 'Tech', color: 'violet', targetDate: '2026-12-25', monthlyContribution: 150 },
  { id: 'goal-4', title: 'Roth IRA Annual Max', targetAmount: 7000, currentAmount: 4200, category: 'Investments', color: 'amber', targetDate: '2026-12-31', monthlyContribution: 400 }
];

export const INITIAL_AI_RECOMMENDATIONS = [
  {
    id: 'rec-1',
    title: 'Optimize Streaming Subscriptions',
    impact: 'Save $28.50/mo',
    type: 'Cost Reduction',
    description: 'You currently have 4 active media streaming services. FinWise detected you haven’t logged activity on 2 of them in 30+ days.',
    actionLabel: 'Cancel Inactive Subscriptions',
    savingsEstimate: 342,
    badge: 'High Impact',
    applied: false
  },
  {
    id: 'rec-2',
    title: 'Automate Weekly $50 Micro-Save',
    impact: 'Build $2,600/yr',
    type: 'Habit Builder',
    description: 'Setting up recurring Friday micro-transfers aligns with your post-paycheck low-spending window without feeling financial friction.',
    actionLabel: 'Enable Auto-Save Rule',
    savingsEstimate: 2600,
    badge: 'Recommended',
    applied: false
  },
  {
    id: 'rec-3',
    title: 'Shift 2 Dinings Out to Meal Prep',
    impact: 'Save $110/mo',
    type: 'Behavioral Shift',
    description: 'Food & Dining makes up 32% of your non-essential spending. Reducing takeout by just two meals a week yields immediate cash flow.',
    actionLabel: 'Set Dining Budget Cap',
    savingsEstimate: 1320,
    badge: 'Easy Win',
    applied: false
  },
  {
    id: 'rec-4',
    title: 'Move Idle Cash to High-Yield Savings (4.8% APY)',
    impact: 'Earn +$168/yr',
    type: 'Interest Boost',
    description: 'You maintain $3,500 in a traditional 0.01% checking balance. Transferring excess funds to an APY account generates passive compound returns.',
    actionLabel: 'View High-Yield Options',
    savingsEstimate: 168,
    badge: 'Passive Income',
    applied: false
  }
];

export const MONTHLY_TREND_DATA = [
  { month: 'Mar 2026', income: 4800, spending: 2950, savings: 1850 },
  { month: 'Apr 2026', income: 5100, spending: 3100, savings: 2000 },
  { month: 'May 2026', income: 4800, spending: 2780, savings: 2020 },
  { month: 'Jun 2026', income: 5450, spending: 3200, savings: 2250 },
  { month: 'Jul 2026', income: 4800, spending: 2890, savings: 1910 },
  { month: 'Aug 2026', income: 5450, spending: 2840, savings: 2610 }
];

export const FORECAST_PREDICTIONS_DATA = [
  { day: 'Today (Aug 22)', baseline: 2840, projected: 2840, lower: 2840, upper: 2840 },
  { day: '+15 Days', baseline: 3250, projected: 3120, lower: 3000, upper: 3300 },
  { day: '+30 Days (Sep)', baseline: 3750, projected: 3510, lower: 3350, upper: 3700 },
  { day: '+45 Days', baseline: 4200, projected: 3900, lower: 3700, upper: 4150 },
  { day: '+60 Days (Oct)', baseline: 4680, projected: 4320, lower: 4100, upper: 4550 },
  { day: '+75 Days', baseline: 5150, projected: 4720, lower: 4450, upper: 5000 },
  { day: '+90 Days (Nov)', baseline: 5650, projected: 5140, lower: 4800, upper: 5450 }
];

export const AI_DAILY_INSIGHTS = [
  {
    icon: 'Sparkles',
    title: 'Dining Out Optimization',
    text: 'You spent 18% less on dining out this week compared to your 30-day average! If you keep this pace, you’ll unlock an extra $95 for your Japan Trip goal by month-end.',
    tag: 'Positive Trend',
    color: 'emerald'
  },
  {
    icon: 'TrendingDown',
    title: 'Subscription Audit Alert',
    text: 'FinWise noticed 3 recurring charges occurring within 48 hours of each other ($16.99, $15.49, $12.00). Consolidating could free up $35/month.',
    tag: 'Smart Savings',
    color: 'indigo'
  },
  {
    icon: 'ShieldCheck',
    title: 'Emergency Reserve Milestone',
    text: 'Your Emergency Cushion is now at 71% of its $3,000 target. You are resilient against 2.5 months of baseline living expenses!',
    tag: 'Goal Ahead',
    color: 'violet'
  },
  {
    icon: 'Zap',
    title: 'Utility Usage Pattern',
    text: 'Summer electricity charges peaked early. Switching to off-peak thermostat scheduling can save an estimated $22 on your next statement.',
    tag: 'Efficiency',
    color: 'amber'
  }
];

export const FINANCIAL_HEALTH_METRICS = {
  overallScore: 84,
  statusLabel: 'Thriving',
  statusDescription: 'Your financial habits demonstrate strong discipline with an encouraging savings momentum.',
  pillars: [
    { name: 'Spending Control', score: 88, max: 100, status: 'Optimal', description: 'Spending represents < 60% of total income.' },
    { name: 'Savings Consistency', score: 82, max: 100, status: 'Strong', description: 'Saved 28.5% of net income for 4 consecutive months.' },
    { name: 'Emergency Cushion', score: 78, max: 100, status: 'Good', description: 'Current fund covers 2.4 months of essential overhead.' },
    { name: 'Debt & Overhead', score: 90, max: 100, status: 'Excellent', description: 'Zero high-interest consumer debt burden detected.' }
  ]
};
