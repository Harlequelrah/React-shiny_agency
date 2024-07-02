import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey/index.jsx'
import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'
import Results from './pages/Results/index.jsx'
import Freelances from './pages/Freelances/index.jsx'
import { GlobalStyle } from './utils/font/GlobalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
