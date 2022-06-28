import NProgress from "nprogress";
import "nprogress/nprogress.css";
// Configuration of global progress bar
NProgress.configure({
  easing: "ease", // Animation mode
  speed: 1000, // Increase the speed of the progress bar
  showSpinner: false, // Show load ico
  trickleSpeed: 200, // Auto increment interval
  minimum: 0.3, // Minimum percentage at initialization
});
// Open the progress bar
export const start = () => {
  NProgress.start();
};
// Close progress bar
export const close = () => {
  NProgress.done();
};
