const KEY = 'sfs_store_v1';

const defaultStore = {
  users: [],
  courses: [],
  templates: [],
  feedback: []
};

export function getStore() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(defaultStore));
    return defaultStore;
  }
  return JSON.parse(raw);
}

export function setStore(store) {
  localStorage.setItem(KEY, JSON.stringify(store));
}

export function updateStore(mutator) {
  const current = getStore();
  const next = mutator({ ...current });
  setStore(next);
  return next;
}