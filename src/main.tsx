import "./index.css";

import { ErrorComponent, ErrorComponentProps, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>loading...</div>,
  defaultErrorComponent: ({ error }: ErrorComponentProps) => <ErrorComponent error={error} />,
  defaultNotFoundComponent: () => <div>404</div>,
  context: {
    auth: undefined!,
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
