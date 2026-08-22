// FinWise Main Root Application Component

import { AppProvider, useApp } from './context/AppContext.js';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { MobileNav } from './components/MobileNav.js';
import { AIAssistantModal } from './components/AIAssistantModal.js';
import { LandingPage } from './components/LandingPage.js';
import { DashboardPage } from './components/DashboardPage.js';
import { ExpenseTrackerPage } from './components/ExpenseTrackerPage.js';
import { PredictionsPage } from './components/PredictionsPage.js';
import { SavingsPage } from './components/SavingsPage.js';
import { InsightsPage } from './components/InsightsPage.js';

function MainLayout() {
  const { activeTab } = useApp();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'landing':
        return React.createElement(LandingPage, null);
      case 'dashboard':
        return React.createElement(DashboardPage, null);
      case 'expenses':
        return React.createElement(ExpenseTrackerPage, null);
      case 'predictions':
        return React.createElement(PredictionsPage, null);
      case 'savings':
        return React.createElement(SavingsPage, null);
      case 'insights':
        return React.createElement(InsightsPage, null);
      default:
        return React.createElement(DashboardPage, null);
    }
  };

  return React.createElement('div', {
    className: 'min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-emerald-500 selection:text-white'
  },
    // Top Navigation Header
    React.createElement(Header, null),

    // Body Container (Sidebar + Main Content Area)
    activeTab === 'landing' 
      ? React.createElement('main', { className: 'flex-1' }, renderActiveView())
      : React.createElement('div', { className: 'flex-1 max-w-7xl w-full mx-auto flex' },
          React.createElement(Sidebar, null),
          React.createElement('main', { className: 'flex-1 p-4 sm:p-6 lg:p-8 pb-24 md:pb-8 overflow-x-hidden' },
            renderActiveView()
          )
        ),

    // Mobile Navigation Bottom Bar
    React.createElement(MobileNav, null),

    // Interactive AI Assistant Chatbot Drawer
    React.createElement(AIAssistantModal, null)
  );
}

export function App() {
  return React.createElement(AppProvider, null, React.createElement(MainLayout, null));
}

// Render React App to Root element
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(App, null));
}
