// FinWise React App Context Provider & Custom Hooks

import { 
  INITIAL_TRANSACTIONS, 
  INITIAL_SAVINGS_GOALS, 
  INITIAL_AI_RECOMMENDATIONS, 
  AI_DAILY_INSIGHTS 
} from '../data/mockData.js';

const { createContext, useContext, useState, useEffect } = React;

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Navigation State
  const [activeTab, setActiveTab] = useState('dashboard'); // 'landing', 'dashboard', 'expenses', 'predictions', 'savings', 'insights'

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('finwise_theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('finwise_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Transactions State (LocalStorage persisted)
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('finwise_transactions');
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
  });

  useEffect(() => {
    localStorage.setItem('finwise_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx) => {
    const transactionObj = {
      id: 'tx-' + Date.now(),
      date: newTx.date || new Date().toISOString().split('T')[0],
      autoTagged: true,
      ...newTx,
      amount: parseFloat(newTx.amount) || 0
    };
    setTransactions(prev => [transactionObj, ...prev]);
  };

  const editTransaction = (id, updatedFields) => {
    setTransactions(prev => prev.map(tx => tx.id === id ? { ...tx, ...updatedFields, amount: parseFloat(updatedFields.amount) || tx.amount } : tx));
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(tx => tx.id !== id));
  };

  // Savings Goals State (LocalStorage persisted)
  const [savingsGoals, setSavingsGoals] = useState(() => {
    const saved = localStorage.getItem('finwise_goals');
    return saved ? JSON.parse(saved) : INITIAL_SAVINGS_GOALS;
  });

  useEffect(() => {
    localStorage.setItem('finwise_goals', JSON.stringify(savingsGoals));
  }, [savingsGoals]);

  const addSavingsGoal = (newGoal) => {
    const goalObj = {
      id: 'goal-' + Date.now(),
      targetAmount: parseFloat(newGoal.targetAmount) || 1000,
      currentAmount: parseFloat(newGoal.currentAmount) || 0,
      monthlyContribution: parseFloat(newGoal.monthlyContribution) || 100,
      color: newGoal.color || 'emerald',
      ...newGoal
    };
    setSavingsGoals(prev => [...prev, goalObj]);
  };

  const depositToGoal = (goalId, amount) => {
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount <= 0) return;
    setSavingsGoals(prev => prev.map(g => {
      if (g.id === goalId) {
        return { ...g, currentAmount: Math.min(g.targetAmount, g.currentAmount + numAmount) };
      }
      return g;
    }));
  };

  // AI Recommendations State
  const [aiRecommendations, setAiRecommendations] = useState(INITIAL_AI_RECOMMENDATIONS);

  const applyRecommendation = (id) => {
    setAiRecommendations(prev => prev.map(rec => rec.id === id ? { ...rec, applied: true } : rec));
  };

  // AI Daily Insight index
  const [dailyInsightIndex, setDailyInsightIndex] = useState(0);
  const cycleDailyInsight = () => {
    setDailyInsightIndex(prev => (prev + 1) % AI_DAILY_INSIGHTS.length);
  };

  // Scenario Simulation Slider (0% to 40% spend reduction)
  const [scenarioReduction, setScenarioReduction] = useState(15);

  // AI Chat Assistant Drawer State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Hi there! I’m FinWise AI, your non-judgmental financial wellness partner. Ask me anything about your spending, savings goals, or budget strategy!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const sendChatMessage = (userText) => {
    if (!userText.trim()) return;
    
    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);

    // Simulated AI response generation
    setTimeout(() => {
      let replyText = "That's a great question! Based on your current cash flow, maintaining your $250 monthly emergency contribution gives you flexibility while enjoying weekend activities.";
      
      const lower = userText.toLowerCase();
      if (lower.includes('din') || lower.includes('food') || lower.includes('eaten') || lower.includes('restaurant')) {
        replyText = "FinWise analyzed your dining patterns: You're spending ~$208/month on food & dining. If you shift just 2 meals to home cooking per week, you could save ~$110 monthly without feeling restricted!";
      } else if (lower.includes('save') || lower.includes('goal') || lower.includes('japan') || lower.includes('trip')) {
        replyText = "Your Japan Trip 2027 goal is currently at 56% ($1,400 of $2,500). At your current savings speed, you're 3 weeks ahead of schedule! Keep up the automated deposits.";
      } else if (lower.includes('budget') || lower.includes('predict') || lower.includes('future') || lower.includes('trend')) {
        replyText = "Your 90-day spending projection is looking healthy! With a 15% reduction in non-essential subscriptions, your cash buffer will reach $5,140 by November.";
      } else if (lower.includes('health') || lower.includes('score')) {
        replyText = "Your Financial Health Score is 84/100 (Thriving)! Your strongest metric is Debt & Overhead Control (90/100).";
      }

      const aiMsg = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  const value = {
    activeTab,
    setActiveTab,
    isDarkMode,
    toggleDarkMode,
    transactions,
    addTransaction,
    editTransaction,
    deleteTransaction,
    savingsGoals,
    addSavingsGoal,
    depositToGoal,
    aiRecommendations,
    applyRecommendation,
    dailyInsightIndex,
    cycleDailyInsight,
    scenarioReduction,
    setScenarioReduction,
    isAiModalOpen,
    setIsAiModalOpen,
    chatMessages,
    sendChatMessage
  };

  return React.createElement(AppContext.Provider, { value }, children);
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
