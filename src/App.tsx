import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";
import { useAuth } from "@hooks/useAuth";

export default function App() {
  const auth = useAuth();
  return (
    <>
      {" "}
      <RouterProvider
        router={router}
        defaultPreload="intent"
        context={{
          auth: auth,
        }}
      />
    </>
  );
}
