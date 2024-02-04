import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App.tsx'

const domain = import.meta.env.VITE_IGMA_APP_AUTH0_DOMAIN as string
const cliendId = import.meta.env.VITE_IGMA_APP_AUTH0_CLIENT_ID as string

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      clientId={cliendId}
      domain={domain}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
