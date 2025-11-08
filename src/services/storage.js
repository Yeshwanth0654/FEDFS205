const STORAGE_KEY = 'sfs_store_v1';

export function getStore() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { users: [], feedback: [], templates: [] };
}

export function saveStore(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addFeedback(entry) {
  const store = getStore();
  store.feedback.push(entry);
  saveStore(store);
}

export function getFeedback() {
  return getStore().feedback;
}