export default function guest({ next, router }) {
  const data = JSON.parse(localStorage.getItem("AuthenticationStore"));
  console.log(data);
  if (data?.access_token) {
    return router.push({ name: "dashboard" });
  }

  return next();
}
