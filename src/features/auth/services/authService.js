const SESSION_KEY = "isLoggedIn";
const AUTH_VALUE = "true";

export const saveSession = () => localStorage.setItem(SESSION_KEY, AUTH_VALUE);

export const isAuthenticated = () =>
  localStorage.getItem(SESSION_KEY) === AUTH_VALUE;

export const clearSession = () => localStorage.removeItem(SESSION_KEY);
