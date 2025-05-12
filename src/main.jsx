import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupForm from './components/SignupForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signupUser' element={<SignupForm />} />
      </Routes>
    </Router>
  </StrictMode>,
)
