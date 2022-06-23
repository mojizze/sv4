export default function auth({ next, router }) {
  const data = JSON.parse(localStorage.getItem("AuthenticationStore"));

  if (!data?.access_token) {
    return router.push({ name: "login" });
  }

  return next();
}
