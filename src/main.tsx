import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import client from "./GQL/grapth.ts";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
