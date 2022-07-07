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
  return HTTP.post("businesses", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function login(payload) {
  return HTTP.post("login", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function requestPasswordChangeOTP(payload) {
  return HTTP.post("/password/forgot", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function loggedOutUserChangePassword(payload) {
  return HTTP.post("/password/reset", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function loggedInUserChangePassword(payload) {
  return HTTP.post("/password/change", payload);
}

/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any>>}
 */
export function verifyAccount(payload) {
  return HTTP.post("/verify-account", payload);
}

/**
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
export function fetchUserProfile() {
  return HTTP.get("/profile");
}

/**
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
export function completeTour() {
  return HTTP.patch("/users/tour-completed");
}
