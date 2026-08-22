// FinWise Initial Mock Dataset

const INITIAL_DATA = {
  user: {
    name: "Alex Rivera",
    email: "alex.rivera@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    occupation: "Product Designer",
    currency: "$",
    joiningDate: "Jan 2025"
  },

  summary: {
    totalBalance: 14280.50,
    monthlyIncome: 4850.00,
    monthlySpending: 2140.00,
    spendingChange: -4.2, // -4.2% compared to last month
    savingsRate: 28.5,
    savingsRateChange: 3.1,
    upcomingBillsTotal: 420.00,
    upcomingBillsCount: 3
  },

  aiDailyTip: {
    id: "tip-today-1",
    title: "Weekend Dining Out Alert",
    category: "Food & Dining",
    text: "You spent 18% less on dining out this week compared to your 3-month average! If you keep this up, you'll save an extra $65 by the end of the month.",
    actionLabel: "Transfer $45 to Emergency Savings",
    impact: "+$45 to Savings",
    date: "2026-08-22"
  },

  categories: [
    { id: "cat-food", name: "Food & Dining", color: "#10b981", bg: "bg-emerald-100 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-300", icon: "Utensils", budget: 600, spent: 485.50 },
    { id: "cat-rent", name: "Rent & Utilities", color: "#6366f1", bg: "bg-indigo-100 dark:bg-indigo-950/40", text: "text-indigo-700 dark:text-indigo-300", icon: "Home", budget: 1100, spent: 1050.00 },
    { id: "cat-transport", name: "Transport", color: "#3b82f6", bg: "bg-blue-100 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300", icon: "Car", budget: 250, spent: 180.20 },
    { id: "cat-entertainment", name: "Entertainment", color: "#ec4899", bg: "bg-ping-100 dark:bg-pink-950/40", text: "text-pink-700 dark:text-pink-300", icon: "Film", budget: 200, spent: 145.00 },
    { id: "cat-shopping", name: "Shopping", color: "#f59e0b", bg: "bg-amber-100 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-300", icon: "ShoppingBag", budget: 250, spent: 190.80 },
    { id: "cat-subscriptions", name: "Subscriptions", color: "#8b5cf6", bg: "bg-purple-100 dark:bg-purple-950/40", text: "text-purple-700 dark:text-purple-300", icon: "Tv", budget: 100, spent: 88.50 },
    { id: "cat-income", name: "Income", color: "#14b8a6", bg: "bg-teal-100 dark:bg-teal-950/40", text: "text-teal-700 dark:text-teal-300", icon: "ArrowDownLeft", budget: 0, spent: 0 }
  ],

  transactions: [
    { id: "tx-1", date: "2026-08-21", merchant: "Sweetgreen", amount: 16.85, type: "expense", category: "Food & Dining", autoTag: true, autoTagLabel: "AI Auto-Tagged", paymentMethod: "Apple Pay (Card ending 4821)", note: "Organic salad lunch" },
    { id: "tx-2", date: "2026-08-20", merchant: "Spotify Tech Inc.", amount: 10.99, type: "expense", category: "Subscriptions", autoTag: true, autoTagLabel: "Recurring Sub", paymentMethod: "Debit Card (*1102)", note: "Monthly Premium" },
    { id: "tx-3", date: "2026-08-19", merchant: "Client Freelance Payment", amount: 850.00, type: "income", category: "Income", autoTag: true, autoTagLabel: "Deposit", paymentMethod: "Direct Deposit", note: "Design Sprint Retainer" },
    { id: "tx-4", date: "2026-08-18", merchant: "Trader Joe's", amount: 78.40, type: "expense", category: "Food & Dining", autoTag: true, autoTagLabel: "AI Auto-Tagged", paymentMethod: "Apple Pay (Card ending 4821)", note: "Weekly groceries" },
    { id: "tx-5", date: "2026-08-17", merchant: "Uber Rides", amount: 24.50, type: "expense", category: "Transport", autoTag: true, autoTagLabel: "Ride Share", paymentMethod: "Credit Card (*4821)", note: "Evening ride home" },
    { id: "tx-6", date: "2026-08-15", merchant: "Apt 4B Rent Transfer", amount: 950.00, type: "expense", category: "Rent & Utilities", autoTag: true, autoTagLabel: "Fixed Expense", paymentMethod: "Bank Transfer", note: "August rent share" },
    { id: "tx-7", date: "2026-08-14", merchant: "Sezane Clothing", amount: 120.00, type: "expense", category: "Shopping", autoTag: true, autoTagLabel: "AI Auto-Tagged", paymentMethod: "Credit Card (*4821)", note: "Summer linen shirt" },
    { id: "tx-8", date: "2026-08-12", merchant: "AMC Cinema", amount: 32.00, type: "expense", category: "Entertainment", autoTag: true, autoTagLabel: "Entertainment", paymentMethod: "Apple Pay", note: "Movie night with Maya" },
    { id: "tx-9", date: "2026-08-10", merchant: "ConEd Electric Utility", amount: 64.20, type: "expense", category: "Rent & Utilities", autoTag: true, autoTagLabel: "Utility", paymentMethod: "Autopay", note: "Electric bill" },
    { id: "tx-10", date: "2026-08-08", merchant: "Blue Bottle Coffee", amount: 7.25, type: "expense", category: "Food & Dining", autoTag: true, autoTagLabel: "AI Auto-Tagged", paymentMethod: "Apple Pay", note: "Iced Oat Latte" },
    { id: "tx-11", date: "2026-08-05", merchant: "Netflix Premium", amount: 22.99, type: "expense", category: "Subscriptions", autoTag: true, autoTagLabel: "Recurring Sub", paymentMethod: "Credit Card", note: "Streaming" },
    { id: "tx-12", date: "2026-08-01", merchant: "TechCorp Payroll", amount: 4000.00, type: "income", category: "Income", autoTag: true, autoTagLabel: "Salary", paymentMethod: "Direct Deposit", note: "Bi-weekly paycheck" },
    { id: "tx-13", date: "2026-07-28", merchant: "Equinox Gym", amount: 55.00, type: "expense", category: "Subscriptions", autoTag: true, autoTagLabel: "Health & Fitness", paymentMethod: "Credit Card", note: "Monthly membership" },
    { id: "tx-14", date: "2026-07-25", merchant: "Whole Foods Market", amount: 92.30, type: "expense", category: "Food & Dining", autoTag: true, autoTagLabel: "Groceries", paymentMethod: "Debit Card", note: "Organic groceries" },
    { id: "tx-15", date: "2026-07-22", merchant: "Lyft", amount: 18.20, type: "expense", category: "Transport", autoTag: true, autoTagLabel: "Ride Share", paymentMethod: "Apple Pay", note: "Airport transfer" }
  ],

  historicalTrends: [
    { month: "Mar", income: 4500, spending: 2450, savings: 2050 },
    { month: "Apr", income: 4600, spending: 2300, savings: 2300 },
    { month: "May", income: 4500, spending: 2180, savings: 2320 },
    { month: "Jun", income: 5200, spending: 2500, savings: 2700 },
    { month: "Jul", income: 4800, spending: 2250, savings: 2550 },
    { month: "Aug", income: 4850, spending: 2140, savings: 2710 }
  ],

  forecast30: [
    { day: "Today", actual: 2140, projected: 2140, lower: 2140, upper: 2140 },
    { day: "Day 7", projected: 2520, lower: 2400, upper: 2650 },
    { day: "Day 15", projected: 2980, lower: 2800, upper: 3150 },
    { day: "Day 22", projected: 3450, lower: 3200, upper: 3700 },
    { day: "Day 30", projected: 3950, lower: 3650, upper: 4250 }
  ],

  forecast60: [
    { day: "Today", projected: 2140, lower: 2140, upper: 2140 },
    { day: "Day 15", projected: 2980, lower: 2800, upper: 3150 },
    { day: "Day 30", projected: 3950, lower: 3650, upper: 4250 },
    { day: "Day 45", projected: 4800, lower: 4400, upper: 5200 },
    { day: "Day 60", projected: 5750, lower: 5200, upper: 6300 }
  ],

  forecast90: [
    { day: "Today", projected: 2140, lower: 2140, upper: 2140 },
    { day: "Day 30", projected: 3950, lower: 3650, upper: 4250 },
    { day: "Day 60", projected: 5750, lower: 5200, upper: 6300 },
    { day: "Day 75", projected: 6700, lower: 6000, upper: 7400 },
    { day: "Day 90", projected: 7650, lower: 6800, upper: 8500 }
  ],

  aiRecommendations: [
    {
      id: "rec-1",
      title: "Consolidate Unused Streaming Subscriptions",
      description: "AI detected 3 active video subscriptions (Netflix, Hulu, HBO Max). Pausing 1 could save you $15/month with zero hassle.",
      savingsMonthly: 15.00,
      savingsAnnual: 180.00,
      difficulty: "Easy",
      impact: "High",
      category: "Subscriptions",
      icon: "Tv",
      actionText: "Auto-Draft Cancel Reminder",
      status: "active"
    },
    {
      id: "rec-2",
      title: "Automate $50/Week Rainy Day Fund",
      description: "Your checking balance remains steady above $3,500. Setting an automatic $50 weekly sweep to high-yield savings will build your buffer effortlessy.",
      savingsMonthly: 216.00,
      savingsAnnual: 2600.00,
      difficulty: "Set & Forget",
      impact: "Very High",
      category: "Savings",
      icon: "PiggyBank",
      actionText: "Enable $50 Auto-Save",
      status: "active"
    },
    {
      id: "rec-3",
      title: "Mid-Week Coffee Micro-Optimization",
      description: "You order premium espresso drinks 4 days/week on average ($7.25/ea). Preparing coffee at home 2 days/week saves ~$58/month.",
      savingsMonthly: 58.00,
      savingsAnnual: 696.00,
      difficulty: "Moderate",
      impact: "Medium",
      category: "Food & Dining",
      icon: "Coffee",
      actionText: "Add $58 to Coffee Fund",
      status: "active"
    },
    {
      id: "rec-4",
      title: "Switch Grocery Day to Wednesdays",
      description: "Trader Joe's and Whole Foods restock fresh inventory mid-week. AI historical patterns show 8% fewer impulse snack purchases on Wednesdays!",
      savingsMonthly: 35.00,
      savingsAnnual: 420.00,
      difficulty: "Easy",
      impact: "Medium",
      category: "Food & Dining",
      icon: "ShoppingCart",
      actionText: "Add Calendar Event",
      status: "active"
    }
  ],

  savingsGoals: [
    {
      id: "goal-1",
      title: "Emergency Cushion",
      category: "Safety Net",
      currentAmount: 2400.00,
      targetAmount: 5000.00,
      targetDate: "2026-12-31",
      color: "emerald",
      bgGradient: "from-emerald-500 to-teal-600",
      icon: "ShieldCheck",
      monthlyContribution: 250.00,
      note: "3 months of essential rent & living expenses"
    },
    {
      id: "goal-2",
      title: "Japan Spring Trip",
      category: "Travel & Fun",
      currentAmount: 1850.00,
      targetAmount: 3500.00,
      targetDate: "2027-04-15",
      color: "indigo",
      bgGradient: "from-indigo-500 to-purple-600",
      icon: "Plane",
      monthlyContribution: 200.00,
      note: "Tokyo ramen, Kyoto temples & Shinkansen passes"
    },
    {
      id: "goal-3",
      title: "MacBook Pro Upgrade",
      category: "Career & Tech",
      currentAmount: 950.00,
      targetAmount: 1400.00,
      targetDate: "2026-11-20",
      color: "blue",
      bgGradient: "from-blue-500 to-cyan-600",
      icon: "Laptop",
      monthlyContribution: 150.00,
      note: "M3 Max for freelance design work"
    },
    {
      id: "goal-4",
      title: "Festival Weekend",
      category: "Lifestyle",
      currentAmount: 340.00,
      targetAmount: 500.00,
      targetDate: "2026-09-30",
      color: "pink",
      bgGradient: "from-pink-500 to-rose-600",
      icon: "Sparkles",
      monthlyContribution: 80.00,
      note: "Passes + Airbnb share"
    }
  ],

  healthScore: {
    overallScore: 84,
    ratingText: "Healthy & Flourishing",
    subtext: "Your financial stability is top-notch for your age bracket! You're saving 28.5% of income and keeping fixed costs below 50%.",
    factors: [
      { name: "Savings Rate & Buffer", score: 92, status: "Excellent", text: "28.5% rate is double the 15% recommended baseline." },
      { name: "Fixed Expense Load", score: 88, status: "Optimal", text: "Rent & Utilities consume only 38% of monthly income." },
      { name: "Spending Consistency", score: 78, status: "Good", text: "Occasional shopping spikes on weekends." },
      { name: "Subscription Efficiency", score: 80, status: "Good", text: "3 active services; low redundancy." }
    ]
  },

  upcomingBills: [
    { id: "bill-1", name: "Apt Rent Share", dueDate: "Aug 31, 2026", amount: 950.00, category: "Rent & Utilities", icon: "Home", status: "Upcoming" },
    { id: "bill-2", name: "ConEd Electricity", dueDate: "Sep 05, 2026", amount: 65.00, category: "Rent & Utilities", icon: "Zap", status: "Upcoming" },
    { id: "bill-3", name: "Spotify Family", dueDate: "Sep 07, 2026", amount: 10.99, category: "Subscriptions", icon: "Tv", status: "Auto-Pay" }
  ]
};
