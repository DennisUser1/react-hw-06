import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/tooltip.css"
import "modern-normalize";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
