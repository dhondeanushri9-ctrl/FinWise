// FinWise Main Application Entry & Layout Shell Component

// Icon Helper Component utilizing inline Lucide SVG icons for zero-dependency reliability
function IconHelper({ name, className = "w-5 h-5" }) {
  const iconMap = {
    Wallet: <path d="M19 7 border-2 h-14 w-18 m2-2 2-2 2-2 2 2 2-2 2 2 2-2 2 2" d2="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" d3="M16 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />,
    Sparkles: <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />,
    TrendingUp: <path d="M22 7L13.5 15.5L8.5 10.5L2 17" d2="M16 7H22V13" />,
    CreditCard: <path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" d2="M2 10h20" d3="M6 15h4" />,
    PiggyBank: <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-3.5c1 0 2.5-1 2.5-3 0-.6 0-1.5-1.5-2.5 0-.5 0-2-1-4z" d2="M16 11h.01" />,
    Calendar: <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" d2="M16 2v4" d3="M8 2v4" d4="M3 10h18" />,
    Clock: <circle cx="12" cy="12" r="10" d2="M12 6v6l4 2" />,
    Utensils: <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" d2="M15 2v16" d3="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />,
    Home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" d2="M9 22V12h6v10" />,
    Car: <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3C1.4 11.4 1 12.2 1 13v3c0 .6.4 1 1 1h2" d2="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" d3="M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
    Film: <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" d2="M7 2v20" d3="M17 2v20" d4="M2 12h20" d5="M2 7h5" d6="M2 17h5" d7="M17 17h5" d8="M17 7h5" />,
    ShoppingBag: <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" d2="M3 6h18" d3="M16 10a4 4 0 0 1-8 0" />,
    Tv: <rect x="2" y="7" width="20" height="15" rx="2" ry="2" d2="M17 2l-5 5-5-5" />,
    ArrowDownLeft: <path d="M17 7L7 17" d2="M17 17H7V7" />,
    ShieldCheck: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" d2="M9 12l2 2 4-4" />,
    Plane: <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />,
    Laptop: <path d="M20 16V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11M2 20h20" />,
    PlusCircle: <circle cx="12" cy="12" r="10" d2="M12 8v8" d3="M8 12h8" />,
    Search: <circle cx="11" cy="11" r="8" d2="M21 21l-4.35-4.35" />,
    Edit2: <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />,
    Trash2: <path d="M3 6h18" d2="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" d3="M10 11v6" d4="M14 11v6" />,
    Sliders: <path d="M4 21v-7" d2="M4 10V3" d3="M12 21v-9" d4="M12 8V3" d5="M20 21v-5" d6="M20 11V3" d7="M1 14h6" d8="M9 8h6" d9="M17 16h6" />,
    Zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    ThumbsUp: <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />,
    Target: <circle cx="12" cy="12" r="10" d2="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" d3="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
    Compass: <circle cx="12" cy="12" r="10" d2="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />,
    Printer: <polyline points="6 9 6 2 18 2 18 9" d2="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" d3="M6 14h12v8H6z" />,
    Download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" d2="M7 10l5 5 5-5" d3="M12 15V3" />,
    FileText: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" d2="M14 2v6h6" d3="M16 13H8" d4="M16 17H8" d5="M10 9H8" />,
    Check: <polyline points="20 6 9 17 4 12" />,
    X: <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />,
    Moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
    Sun: <circle cx="12" cy="12" r="5" d2="M12 1v2" d3="M12 21v2" d4="M4.22 4.22l1.42 1.42" d5="M18.36 18.36l1.42 1.42" d6="M1 12h2" d7="M21 12h2" d8="M4.22 19.78l1.42-1.42" d9="M18.36 5.64l1.42-1.42" />,
    ArrowRight: <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />,
    PlayCircle: <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />,
    ChevronRight: <polyline points="9 18 15 12 9 6" />,
    Inbox: <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />,
    Bell: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />,
    Plus: <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />,
    List: <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />,
    PieChart: <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />,
    Activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    Tag: <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />,
    CheckCircle: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  };

  const elem = iconMap[name] || iconMap.Sparkles;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {elem}
    </svg>
  );
}

function FinWiseApp() {
  // Load App Data from Storage or Mock
  const [appState, setAppState] = React.useState(() => loadAppData());

  // Navigation Page State: 'landing', 'dashboard', 'expenses', 'predictions', 'savings', 'insights'
  const [currentPage, setCurrentPage] = React.useState("dashboard");

  // Theme State: 'light' | 'dark'
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("finwise_theme") || "light";
  });

  // Notifications dropdown toggle
  const [showNotifications, setShowNotifications] = React.useState(false);

  // Synchronize Dark Mode on HTML class
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("finwise_theme", theme);
  }, [theme]);

  // Persist State to LocalStorage on Change
  React.useEffect(() => {
    saveAppData(appState);
  }, [appState]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Reset Mock Data
  const handleResetData = () => {
    if (window.confirm("Reset FinWise app to initial sample data?")) {
      const reset = resetAppData();
      setAppState({ ...reset });
    }
  };

  // Add Transaction Handler
  const handleAddTransaction = (newTx) => {
    setAppState(prev => {
      const updatedTx = [newTx, ...prev.transactions];
      const addedSpend = newTx.type === 'expense' ? newTx.amount : 0;
      const addedIncome = newTx.type === 'income' ? newTx.amount : 0;
      
      return {
        ...prev,
        transactions: updatedTx,
        summary: {
          ...prev.summary,
          totalBalance: prev.summary.totalBalance + (addedIncome - addedSpend),
          monthlySpending: prev.summary.monthlySpending + addedSpend
        }
      };
    });
  };

  // Edit Transaction Handler
  const handleEditTransaction = (updatedTx) => {
    setAppState(prev => ({
      ...prev,
      transactions: prev.transactions.map(t => t.id === updatedTx.id ? updatedTx : t)
    }));
  };

  // Delete Transaction Handler
  const handleDeleteTransaction = (txId) => {
    setAppState(prev => {
      const target = prev.transactions.find(t => t.id === txId);
      if (!target) return prev;
      const isExpense = target.type === 'expense';

      return {
        ...prev,
        transactions: prev.transactions.filter(t => t.id !== txId),
        summary: {
          ...prev.summary,
          totalBalance: prev.summary.totalBalance + (isExpense ? target.amount : -target.amount),
          monthlySpending: isExpense ? Math.max(0, prev.summary.monthlySpending - target.amount) : prev.summary.monthlySpending
        }
      };
    });
  };

  // Add Savings Goal
  const handleAddGoal = (newGoal) => {
    setAppState(prev => ({
      ...prev,
      savingsGoals: [newGoal, ...prev.savingsGoals]
    }));
  };

  // Deposit to Goal
  const handleDepositGoal = (goalId, depositAmt) => {
    setAppState(prev => ({
      ...prev,
      savingsGoals: prev.savingsGoals.map(g => {
        if (g.id === goalId) {
          return { ...g, currentAmount: g.currentAmount + depositAmt };
        }
        return g;
      }),
      summary: {
        ...prev.summary,
        totalBalance: Math.max(0, prev.summary.totalBalance - depositAmt)
      }
    }));
  };

  // Apply Daily Tip Action
  const handleApplyTip = (tip) => {
    handleDepositGoal("goal-1", 45.00); // Add $45 to emergency fund
    alert("✨ Awesome! $45.00 transferred directly to Emergency Cushion Goal.");
  };

  // Apply Recommendation Action
  const handleAcceptRecommendation = (rec) => {
    if (rec.category === "Savings") {
      handleDepositGoal("goal-1", 50.00);
      alert("✨ $50 Auto-Save sweep enabled! Emergency buffer updated.");
    } else {
      alert(`✨ "${rec.title}" recommendation activated!`);
    }
  };

  // Exporters
  const handleExportCSV = () => {
    exportTransactionsCSV(appState.transactions);
  };

  const handleExportJSON = () => {
    exportFinancialReportJSON(appState);
  };

  // Sidebar & Top Nav Navigation Items
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "Home" },
    { id: "expenses", label: "Expense Tracker", icon: "CreditCard" },
    { id: "predictions", label: "Predictions", icon: "TrendingUp" },
    { id: "savings", label: "Savings Goals", icon: "PiggyBank" },
    { id: "insights", label: "Insights & Reports", icon: "Activity" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Application Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & View Switcher */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div 
            onClick={() => setCurrentPage("landing")} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <IconHelper name="Sparkles" className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                FinWise
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">AI</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold block -mt-0.5">Financial Wellness</span>
            </div>
          </div>

          {/* Quick Landing vs App Toggle Pill */}
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setCurrentPage("landing")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${currentPage === 'landing' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              Landing Page
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${currentPage !== 'landing' ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              App View
            </button>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors relative"
              title="Notifications"
            >
              <IconHelper name="Bell" className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-4 space-y-3 z-50 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">AI Activity Center</span>
                  <span className="text-[10px] text-emerald-500 font-bold">3 Unread</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 space-y-0.5">
                    <p className="font-bold text-slate-900 dark:text-white">+$850 Freelance Deposit</p>
                    <p className="text-[11px] text-slate-400">Design Retainer auto-tagged under Income.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 space-y-0.5">
                    <p className="font-bold text-slate-900 dark:text-white">Monthly Budget Alert</p>
                    <p className="text-[11px] text-slate-400">Dining spend is 18% below average!</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Light / Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            <IconHelper name={theme === 'light' ? 'Moon' : 'Sun'} className="w-5 h-5" />
          </button>

          {/* Reset Sample Data Button */}
          <button
            onClick={handleResetData}
            className="hidden sm:flex p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors text-xs font-bold items-center gap-1.5"
            title="Reset to Sample Data"
          >
            <IconHelper name="Inbox" className="w-4 h-4" />
            <span>Reset Demo</span>
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800">
            <img
              src={appState.user.avatar}
              alt={appState.user.name}
              className="w-9 h-9 rounded-2xl object-cover ring-2 ring-emerald-500/40"
            />
            <div className="hidden lg:block text-left text-xs">
              <p className="font-bold text-slate-900 dark:text-white leading-tight">{appState.user.name}</p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{appState.user.occupation}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body Layout (Landing or Sidebar + App Content) */}
      {currentPage === "landing" ? (
        <LandingPage
          onLaunchApp={() => setCurrentPage("dashboard")}
          iconHelper={IconHelper}
        />
      ) : (
        <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-8">
          {/* Desktop Persistent Sidebar Navigation */}
          <aside className="hidden md:block w-60 shrink-0 space-y-6">
            <div className="sticky top-24 space-y-6">
              <nav className="space-y-1.5">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`w-full px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-3 ${isActive ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 translate-x-1' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      <IconHelper name={item.icon} className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar AI Mini Health Card */}
              <div className="p-4 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">Health Score</span>
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">84/100</span>
                </div>
                <div className="w-full h-2 bg-emerald-200 dark:bg-emerald-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[84%]" />
                </div>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                  Saving 28.5% of monthly income. Excellent buffer!
                </p>
              </div>
            </div>
          </aside>

          {/* Main App Page Content */}
          <main className="flex-1 pb-20 md:pb-8 min-w-0">
            {currentPage === "dashboard" && (
              <Dashboard
                data={appState}
                onNavigate={setCurrentPage}
                onApplyTip={handleApplyTip}
                iconHelper={IconHelper}
              />
            )}

            {currentPage === "expenses" && (
              <ExpenseTracker
                data={appState}
                onAddTransaction={handleAddTransaction}
                onEditTransaction={handleEditTransaction}
                onDeleteTransaction={handleDeleteTransaction}
                iconHelper={IconHelper}
              />
            )}

            {currentPage === "predictions" && (
              <Predictions
                data={appState}
                iconHelper={IconHelper}
              />
            )}

            {currentPage === "savings" && (
              <SavingsGoals
                data={appState}
                onAddGoal={handleAddGoal}
                onDepositGoal={handleDepositGoal}
                onAcceptRecommendation={handleAcceptRecommendation}
                iconHelper={IconHelper}
              />
            )}

            {currentPage === "insights" && (
              <InsightsReport
                data={appState}
                onExportCSV={handleExportCSV}
                onExportJSON={handleExportJSON}
                iconHelper={IconHelper}
              />
            )}
          </main>
        </div>
      )}

      {/* Mobile Responsive Bottom Navigation Bar */}
      {currentPage !== "landing" && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-2 flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${isActive ? 'text-emerald-600 dark:text-emerald-400 font-extrabold scale-105' : 'text-slate-400'}`}
              >
                <IconHelper name={item.icon} className="w-5 h-5" />
                <span className="text-[10px] mt-0.5 font-medium">{item.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

// Render React App to DOM Root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<FinWiseApp />);
}
