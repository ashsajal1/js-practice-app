import { createBrowserRouter } from 'react-router-dom'
import Practice from './pages/practice'

export const router = createBrowserRouter([
  {
    path: '/q/:questonId',
    element: <Practice />
  }
])