import { createRoot } from "react-dom/client";
import { CartBadge } from "./CartBadge";
import { ReviewsSection } from "./ReviewsSection";

const cartBadgeElement = document.getElementById("cart-badge");
const reviewsSectionElement = document.getElementById("reviews-section");

if (cartBadgeElement) {
  createRoot(cartBadgeElement).render(<CartBadge />);
}
if (reviewsSectionElement) {
  createRoot(reviewsSectionElement).render(<ReviewsSection />);
}
