import { devtools } from "valtio/utils";

export function newDevtool<T extends object>(store: T, name: string) {
  let enabled = false;
  if (import.meta.env.MODE === "development") {
    enabled = true;
  }
  return devtools(store, { name, enabled });
}
