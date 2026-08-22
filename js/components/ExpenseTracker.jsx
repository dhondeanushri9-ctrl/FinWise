// FinWise Expense Tracker Component (Full CRUD, Search, Filters, Auto-Tagging)

function ExpenseTracker({ data, onAddTransaction, onEditTransaction, onDeleteTransaction, iconHelper }) {
  const Icon = iconHelper;
  const { transactions, categories } = data;

  // Search & Filter State
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedType, setSelectedType] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("date-desc");

  // Modal State
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingTx, setEditingTx] = React.useState(null);
  
  // Form State
  const [formMerchant, setFormMerchant] = React.useState("");
  const [formAmount, setFormAmount] = React.useState("");
  const [formCategory, setFormCategory] = React.useState("Food & Dining");
  const [formType, setFormType] = React.useState("expense");
  const [formDate, setFormDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [formPayment, setFormPayment] = React.useState("Apple Pay");
  const [formNote, setFormNote] = React.useState("");
  const [aiTagPreview, setAiTagPreview] = React.useState("AI Auto-Tagged");

  // Auto-suggest AI Tagging based on Merchant Input
  React.useEffect(() => {
    const lower = formMerchant.toLowerCase();
    if (lower.includes("uber") || lower.includes("lyft") || lower.includes("transit") || lower.includes("gas")) {
      setFormCategory("Transport");
      setAiTagPreview("AI Tag: Transport");
    } else if (lower.includes("starbucks") || lower.includes("coffee") || lower.includes("sweetgreen") || lower.includes("trader") || lower.includes("food") || lower.includes("cafe")) {
      setFormCategory("Food & Dining");
      setAiTagPreview("AI Tag: Dining");
    } else if (lower.includes("spotify") || lower.includes("netflix") || lower.includes("hulu") || lower.includes("gym")) {
      setFormCategory("Subscriptions");
      setAiTagPreview("AI Tag: Subscription");
    } else if (lower.includes("rent") || lower.includes("coned") || lower.includes("electric") || lower.includes("wifi")) {
      setFormCategory("Rent & Utilities");
      setAiTagPreview("AI Tag: Fixed Cost");
    } else if (lower.includes("salary") || lower.includes("freelance") || lower.includes("paycheck") || lower.includes("deposit")) {
      setFormCategory("Income");
      setFormType("income");
      setAiTagPreview("AI Tag: Income");
    } else {
      setAiTagPreview("AI Tag: Custom");
    }
  }, [formMerchant]);

  // Open Modal for Add
  const handleOpenAddModal = () => {
    setEditingTx(null);
    setFormMerchant("");
    setFormAmount("");
    setFormCategory("Food & Dining");
    setFormType("expense");
    setFormDate(new Date().toISOString().slice(0, 10));
    setFormPayment("Apple Pay");
    setFormNote("");
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEditModal = (tx) => {
    setEditingTx(tx);
    setFormMerchant(tx.merchant);
    setFormAmount(tx.amount.toString());
    setFormCategory(tx.category);
    setFormType(tx.type);
    setFormDate(tx.date);
    setFormPayment(tx.paymentMethod || "Apple Pay");
    setFormNote(tx.note || "");
    setIsModalOpen(true);
  };

  // Submit Form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formMerchant.trim() || !formAmount || isNaN(formAmount)) return;

    const payload = {
      id: editingTx ? editingTx.id : `tx-${Date.now()}`,
      merchant: formMerchant.trim(),
      amount: parseFloat(parseFloat(formAmount).toFixed(2)),
      category: formCategory,
      type: formType,
      date: formDate,
      autoTag: true,
      autoTagLabel: aiTagPreview.replace("AI Tag: ", "") || "AI Auto-Tagged",
      paymentMethod: formPayment,
      note: formNote.trim()
    };

    if (editingTx) {
      onEditTransaction(payload);
    } else {
      onAddTransaction(payload);
    }

    setIsModalOpen(false);
  };

  // Filter & Sort Logic
  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.merchant.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (tx.note && tx.note.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCat = selectedCategory === "all" || tx.category === selectedCategory;
    const matchesType = selectedType === "all" || tx.type === selectedType;
    return matchesSearch && matchesCat && matchesType;
  }).sort((a, b) => {
    if (sortBy === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sortBy === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sortBy === "amount-desc") return b.amount - a.amount;
    if (sortBy === "amount-asc") return a.amount - b.amount;
    return 0;
  });

  const totalFilteredSpent = filteredTransactions
    .filter(t => t.type === 'expense')
    .reduce((acc, cur) => acc + cur.amount, 0);

  const formatMoney = (val) => `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Main Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Expense Tracker & Transactions 💸
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Auto-categorized transactions with search, tags, and full CRUD support.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="PlusCircle" className="w-5 h-5" />
          <span>+ Add Transaction</span>
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search Box */}
          <div className="relative">
            <Icon name="Search" className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search merchant or note..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Categories</option>
              {categories.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Types (Expenses & Income)</option>
              <option value="expense">Expenses Only</option>
              <option value="income">Income Only</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="amount-desc">Amount: High to Low</option>
              <option value="amount-asc">Amount: Low to High</option>
            </select>
          </div>
        </div>

        {/* Toolbar Summary */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <span>Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredTransactions.length}</strong> of {transactions.length} transactions</span>
          <span>Filtered Spending Total: <strong className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">{formatMoney(totalFilteredSpent)}</strong></span>
        </div>
      </div>

      {/* Transactions List Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm overflow-hidden">
        {filteredTransactions.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-400 mx-auto flex items-center justify-center">
              <Icon name="Inbox" className="w-6 h-6" />
            </div>
            <p className="text-base font-bold text-slate-700 dark:text-slate-300">No transactions match your query</p>
            <p className="text-xs text-slate-400">Try adjusting your filters or adding a new transaction.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-50/80 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200/80 dark:border-slate-700/80">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Merchant & Note</th>
                  <th className="py-3.5 px-4 sm:px-6">Category & Tag</th>
                  <th className="py-3.5 px-4 sm:px-6">Date</th>
                  <th className="py-3.5 px-4 sm:px-6">Payment Method</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Amount</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
                    {/* Merchant & Note */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${tx.type === 'income' ? 'bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400' : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'}`}>
                          <Icon name={tx.type === 'income' ? 'ArrowDownLeft' : 'ShoppingBag'} className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{tx.merchant}</p>
                          {tx.note && <p className="text-[11px] text-slate-400 truncate max-w-[180px]">{tx.note}</p>}
                        </div>
                      </div>
                    </td>

                    {/* Category & Tag */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="space-y-1">
                        <span className="font-semibold text-xs text-slate-700 dark:text-slate-300 block">{tx.category}</span>
                        {tx.autoTag && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold">
                            <Icon name="Sparkles" className="w-3 h-3 text-emerald-500" />
                            {tx.autoTagLabel || "AI Tagged"}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap text-slate-500 dark:text-slate-400 text-xs">
                      {tx.date}
                    </td>

                    {/* Payment Method */}
                    <td className="py-4 px-4 sm:px-6 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[140px]">
                      {tx.paymentMethod || "Card"}
                    </td>

                    {/* Amount */}
                    <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                      <span className={`font-extrabold text-sm sm:text-base ${tx.type === 'income' ? 'text-teal-600 dark:text-teal-400' : 'text-slate-900 dark:text-white'}`}>
                        {tx.type === 'income' ? '+' : '-'}{formatMoney(tx.amount)}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 sm:px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleOpenEditModal(tx)}
                          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="Edit Transaction"
                        >
                          <Icon name="Edit2" className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteTransaction && onDeleteTransaction(tx.id)}
                          className="p-1.5 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-950 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          title="Delete Transaction"
                        >
                          <Icon name="Trash2" className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add / Edit Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Icon name={editingTx ? "Edit2" : "PlusCircle"} className="w-5 h-5 text-emerald-600" />
                {editingTx ? "Edit Transaction" : "Add New Transaction"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600"
              >
                <Icon name="X" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              {/* Type Switcher */}
              <div className="flex rounded-xl bg-slate-100 dark:bg-slate-900 p-1">
                <button
                  type="button"
                  onClick={() => setFormType("expense")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${formType === 'expense' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
                >
                  Expense
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("income")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${formType === 'income' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-500'}`}
                >
                  Income
                </button>
              </div>

              {/* Merchant / Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Merchant or Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Starbucks, Rent, Freelance Client"
                  value={formMerchant}
                  onChange={(e) => setFormMerchant(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Amount & Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Amount ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="0.00"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Category Dropdown with AI Auto-Tag Indicator */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Category
                  </label>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
                    {aiTagPreview}
                  </span>
                </div>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {categories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Payment Method
                </label>
                <input
                  type="text"
                  placeholder="e.g., Apple Pay, Debit (*1102), Direct Deposit"
                  value={formPayment}
                  onChange={(e) => setFormPayment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Optional Note
                </label>
                <input
                  type="text"
                  placeholder="Add details (e.g., Organic lunch with team)"
                  value={formNote}
                  onChange={(e) => setFormNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-700/80">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/25 hover:from-emerald-500 hover:to-teal-500"
                >
                  {editingTx ? "Save Changes" : "Create Transaction"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
