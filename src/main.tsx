import { createRoot } from "react-dom/client";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const app = document.getElementById("app");
if (!app) {
  throw new Error("App container was not found");
}

const root = createRoot(app);
root.render(<h1>Hello, world</h1>);
