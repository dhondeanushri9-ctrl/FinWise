// FinWise AI Assistant Drawer Modal

import { useApp } from '../context/AppContext.js';
import { Icon } from './Icon.js';

export function AIAssistantModal() {
  const { isAiModalOpen, setIsAiModalOpen, chatMessages, sendChatMessage } = useApp();
  const [inputText, setInputText] = React.useState('');
  const chatEndRef = React.useRef(null);

  React.useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isAiModalOpen]);

  if (!isAiModalOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChatMessage(inputText);
    setInputText('');
  };

  const quickPrompts = [
    'How can I save $100 this month?',
    'Am I on track for my emergency fund?',
    'How much do I spend on dining out?',
    'Predict my spending for next 30 days'
  ];

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 flex justify-end bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-xs transition-opacity'
  },
    React.createElement('div', {
      className: 'w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-300'
    },
      
      // Header
      React.createElement('div', {
        className: 'p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/20'
      },
        React.createElement('div', { className: 'flex items-center gap-3' },
          React.createElement('div', {
            className: 'w-9 h-9 rounded-xl gradient-bg-indigo flex items-center justify-center text-white shadow-md shadow-indigo-500/20'
          },
            React.createElement(Icon, { name: 'Bot', className: 'w-5 h-5' })
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: 'font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5' },
              'FinWise AI Companion',
              React.createElement('span', { className: 'text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' }, 'Online')
            ),
            React.createElement('p', { className: 'text-[11px] text-slate-500 dark:text-slate-400' }, 'Non-judgmental money guidance')
          )
        ),
        React.createElement('button', {
          onClick: () => setIsAiModalOpen(false),
          className: 'p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
        },
          React.createElement(Icon, { name: 'Plus', className: 'w-5 h-5 rotate-45' })
        )
      ),

      // Disclaimer Banner
      React.createElement('div', {
        className: 'px-4 py-2 bg-amber-500/10 border-b border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-2'
      },
        React.createElement(Icon, { name: 'Sparkles', className: 'w-3.5 h-3.5 shrink-0 text-amber-500' }),
        React.createElement('span', null, 'Simulated AI output for educational & wellness guidance.')
      ),

      // Chat Messages Body
      React.createElement('div', { className: 'flex-1 p-4 overflow-y-auto space-y-4' },
        chatMessages.map(msg => {
          const isAi = msg.sender === 'ai';
          return React.createElement('div', {
            key: msg.id,
            className: `flex gap-3 ${isAi ? '' : 'flex-row-reverse'}`
          },
            isAi && React.createElement('div', {
              className: 'w-7 h-7 rounded-lg gradient-bg-indigo flex items-center justify-center text-white text-xs shrink-0 mt-1 shadow-xs'
            }, React.createElement(Icon, { name: 'Bot', className: 'w-4 h-4' })),
            
            React.createElement('div', { className: `max-w-[82%] space-y-1 ${isAi ? '' : 'text-right'}` },
              React.createElement('div', {
                className: `p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isAi 
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-xs border border-slate-200/50 dark:border-slate-700/50' 
                    : 'gradient-bg-emerald text-white rounded-tr-xs shadow-md shadow-emerald-500/10'
                }`
              }, msg.text),
              React.createElement('span', { className: 'text-[10px] text-slate-400 dark:text-slate-500 px-1 inline-block' }, msg.timestamp)
            )
          );
        }),
        React.createElement('div', { ref: chatEndRef })
      ),

      // Quick Prompt Buttons
      React.createElement('div', { className: 'px-4 py-2 border-t border-slate-200 dark:border-slate-800 overflow-x-auto flex gap-2 no-scrollbar' },
        quickPrompts.map((prompt, idx) => React.createElement('button', {
          key: idx,
          onClick: () => sendChatMessage(prompt),
          className: 'px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700/60 whitespace-nowrap transition-all'
        }, prompt))
      ),

      // Input Form
      React.createElement('form', {
        onSubmit: handleSend,
        className: 'p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2'
      },
        React.createElement('input', {
          type: 'text',
          value: inputText,
          onChange: (e) => setInputText(e.target.value),
          placeholder: 'Ask FinWise AI a money question...',
          className: 'flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-transparent'
        }),
        React.createElement('button', {
          type: 'submit',
          className: 'px-4 py-2.5 rounded-xl gradient-bg-indigo text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center justify-center'
        },
          React.createElement(Icon, { name: 'ArrowUpRight', className: 'w-4 h-4' })
        )
      )
    )
  );
}
