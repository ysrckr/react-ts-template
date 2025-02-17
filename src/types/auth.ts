export type AuthStatus = "logged-out" | "logged-in";

export type AuthState = {
  userId?: string;
  status: AuthStatus;
};

export type Auth = {
  auth: AuthState;
  isAuthenticated: () => boolean;
};
