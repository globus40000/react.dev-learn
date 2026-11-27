import { createRoot } from "react-dom/client";
import { NavigationBar } from "./NavigationBar";

const domNode = document.getElementById("navigation");

if (!domNode) {
  throw new Error("Navigation container was not found");
}

const root = createRoot(domNode);

root.render(<NavigationBar />);
