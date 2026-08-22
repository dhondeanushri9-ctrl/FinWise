// FinWise Data Exporter Utility (CSV & JSON)

function exportTransactionsCSV(transactions) {
  if (!transactions || !transactions.length) return;
  
  const headers = ["ID", "Date", "Merchant/Description", "Amount ($)", "Type", "Category", "Payment Method", "Auto-Tagged", "Note"];
  const rows = transactions.map(tx => [
    `"${tx.id}"`,
    `"${tx.date}"`,
    `"${(tx.merchant || "").replace(/"/g, '""')}"`,
    tx.type === "expense" ? `-${tx.amount.toFixed(2)}` : `+${tx.amount.toFixed(2)}`,
    `"${tx.type}"`,
    `"${tx.category}"`,
    `"${(tx.paymentMethod || "").replace(/"/g, '""')}"`,
    tx.autoTag ? "Yes" : "No",
    `"${(tx.note || "").replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `FinWise_Transactions_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportFinancialReportJSON(appState) {
  if (!appState) return;

  const exportPayload = {
    exportDate: new Date().toISOString(),
    platform: "FinWise AI Financial Wellness",
    user: appState.user,
    summary: appState.summary,
    healthScore: appState.healthScore,
    savingsGoals: appState.savingsGoals,
    totalTransactionsCount: appState.transactions ? appState.transactions.length : 0,
    transactions: appState.transactions
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `FinWise_Full_Report_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
