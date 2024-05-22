import { createBrowserRouter } from 'react-router-dom'
import Practice from './pages/practice'
import NotFound from './pages/not-found'
import Home from './pages/home'
import Layout from './pages/layout'
import Result from './pages/result'
import Quiz from './pages/quiz'
import Interview from './pages/interview'
import Concept from './pages/concept'

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/concept',
        element: <Concept />
      },
      {
        path: '/result',
        element: <Result />
      },
      {
        path: '/interview',
        element: <Interview />
      },
      {
        path: '/quiz',
        element: <Quiz />
      },
      {
        path: '/practice',
        element: <Practice />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])