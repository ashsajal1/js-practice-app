import { createBrowserRouter } from 'react-router-dom'
import Practice from './pages/practice'
import NotFound from './pages/not-found'
import Home from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/q/:questonId',
    element: <Practice />
  },
  {
    path: '*',
    element: <NotFound />
  }
])