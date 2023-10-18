import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import DemoPage from './pages/DemoPage'
import './App.css'
import SinglePost from './pages/SinglePost';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/demo',
        element: <DemoPage />
      },
      {
        path: ':postId',
        element: <SinglePost />
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
