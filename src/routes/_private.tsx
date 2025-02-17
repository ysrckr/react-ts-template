import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ context, location }) => {
    if (context.auth.isAuthenticated() === false) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }

    return { userId: context.auth.auth.userId };
  },
});
