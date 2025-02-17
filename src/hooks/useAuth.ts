import { authStore } from "@store/auth";
import { useSnapshot } from "valtio";

export const useAuth = () => {
  const auth = useSnapshot(authStore);

  const isAuthenticated = () => {
    return auth.status === "logged-in";
  };

  return { auth, isAuthenticated };
};
