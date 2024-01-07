import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// CSS imports
import "../globals.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
