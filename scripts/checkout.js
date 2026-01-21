import { renderCartSummary } from "./checkout/orderSummary.js";

// initial render
renderCartSummary();

// update when localStorage 'cart' changes (other tabs/windows)
window.addEventListener('storage', (e) => {
  if (e.key === 'cart') {
    renderCartSummary();
  }
}); 