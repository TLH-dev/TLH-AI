// Import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import tailwind styles
import './css/tailwind.css'

import 'zmp-ui/zaui.css'

import '../app/globals.css'
import './css/app.scss'
import RootLayout from '../app/layout'

// Import App Component
import appConfig from '../app-config.json'
import App from './components/app'
import HomePage from './pages'
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig
}

// Mount React App
const root = ReactDOM.createRoot(document.getElementById('root')!)
// root.render(<d)
// root.render(
//   <RootLayout>
//     <App />
//   </RootLayout>
// )

root.render(
  (
    <RootLayout>
      <HomePage />
    </RootLayout>
  ) as any
)
