import { HTTP } from "@/api";

export function index(params = {}) {
  return HTTP.get("statements", {
    params,
  });
}
