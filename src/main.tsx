import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/book_viewer.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
