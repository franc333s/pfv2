import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
ScrollToTop

import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/helpers/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
