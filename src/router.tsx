import { createBrowserRouter } from 'react-router-dom'
import Practice from './pages/practice'
import NotFound from './pages/not-found'
import Home from './pages/home'
import Layout from './pages/layout'
import Result from './pages/result'
import Quiz from './pages/quiz'
import Interview from './pages/interview'
import Concept from './pages/concept'
import ErrorElement from './pages/error-element'
import Tutorial from './pages/tutorial'

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorElement />,
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
        path: '/tutorial',
        element: <Tutorial />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])