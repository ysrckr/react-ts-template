export type AuthStatus = "logged-out" | "logged-in";

export type Auth = {
  status: AuthStatus;
  login: () => void;
  logout: () => void;
  getStatus: () => AuthStatus;
  isLoggedIn: () => boolean;
};
