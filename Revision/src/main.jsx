import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // ✅ Tailwind (should be loaded first)
import './App.css'     // ✅ Component-specific styles (optional)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
