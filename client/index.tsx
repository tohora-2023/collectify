import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

import './styles/tailwind.css'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="collectify.au.auth0.com"
      clientId="jWdUB6SOJtAAR83mmryLsQtybzEplc6a"
      redirectUrl={window.location.origin}
      audience="https://collectify/api"
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  )
})
