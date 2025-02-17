import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_private/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /_private/!</div>;
}
