import { HTTP } from "@/api";

export function index(params) {
  return HTTP.get("beneficiaries", {
    params,
  });
}

export function store(payload) {
  return HTTP.post("beneficiaries", payload);
}

export function show(id) {
  return HTTP.get(`beneficiaries/${id}`);
}

export function update(payload, id) {
  return HTTP.patch(`beneficiaries/${id}`, payload);
}

export function destroy(id) {
  return HTTP.delete(`beneficiaries/${id}`);
}
