import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { Provider } from "react-redux";
import { ThemeContextProvider } from './context/theme-context'
import store from './app/store';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
