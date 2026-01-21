import { renderCartSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// initial render
renderCartSummary();

renderPaymentSummary();

// update when localStorage 'cart' changes (other tabs/windows)
window.addEventListener('storage', (e) => {
  if (e.key === 'cart') {
    renderCartSummary();
  }
}); 