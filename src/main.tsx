import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './contexts/Context';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)
