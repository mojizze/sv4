import { useAuthenticationStore } from "@/modules/Authentication/store";

const store = useAuthenticationStore();

export function useUser() {
  return store.user;
}

export const name = `${store.user.firstName} ${store.user.lastName}`;
export const tourCompleted = store.user.tourCompleted;
