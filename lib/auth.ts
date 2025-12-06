export type Role = "user" | "admin";
export type User = { email: string; role: Role };

const KEY = "sf_user";

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  try { const raw = window.localStorage.getItem(KEY); return raw ? JSON.parse(raw) as User : null; } catch { return null; }
}

export function setUser(u: User) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(u));
}

export function logout() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
