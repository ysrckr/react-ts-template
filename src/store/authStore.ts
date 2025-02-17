import { AuthState } from "../types/auth";
import { proxy } from "valtio";

const authState: AuthState = {
  userId: undefined,
  status: "logged-out",
};

export const authStore = proxy(authState);
