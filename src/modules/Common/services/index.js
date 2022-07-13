import { HTTP } from "@/api";

export function states() {
  return HTTP.get("businesses/form-data/states-and-lgas");
}

export function industries() {
  return HTTP.get("businesses/form-data/industries");
}

export function fetchAllBanks(params) {
  return HTTP.get("banks", { params });
}

export function fetchPaginatedBanks() {
  return HTTP.get("banks");
}
