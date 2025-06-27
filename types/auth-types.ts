export type User = {
  uid: string;
  email: string;
} | null;

export type AuthStore = {
  user: User;
  loading: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
};