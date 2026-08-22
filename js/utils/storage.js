// LocalStorage state management for FinWise

const STORAGE_KEY = "finwise_app_state_v1";

function loadAppData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Basic validation
      if (parsed && parsed.transactions && parsed.summary) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("FinWise: Failed to parse localStorage data, falling back to default mock data", e);
  }
  return INITIAL_DATA;
}

function saveAppData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("FinWise: Error saving state to localStorage", e);
  }
}

function resetAppData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("FinWise: Error clearing localStorage", e);
  }
  return INITIAL_DATA;
}
