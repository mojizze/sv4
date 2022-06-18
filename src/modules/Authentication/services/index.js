import { HTTP } from "@/api";

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function register(payload) {
  return HTTP.post("register", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function createBusiness(payload) {
  return HTTP.post("business", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function login(payload) {
  return HTTP.post("login", payload);
}
