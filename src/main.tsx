// make sure main.tsx file has all the needed wrapper components
// these came automatically installed
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// make sure bootstrap is installed to allow for bootstrap styling with 'npm install bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// install createBrowserRouter and RouterProvider to navigate between pages/components in SPA
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import all the components used as children from the initial '/' homepage parent component
import Layout from './Layout'
import Home from './Components/Home'
import CV from './Components/CV'
import Blog from './Components/Blog'
import Art from './Components/Art'
import Subscribe from './Components/Subscribe'
import Contact from './Components/Contact'
import Preorder from './Components/Preorder'

// set up what the browser will be able to route or "link" to to switch between pages in an SPA
const router = createBrowserRouter([
  {
    // tell main.tsx that upon rendering, "no matter what, if the path starts with '/' I want you to show that"
    path: '/',

    // JSX to be displayed that doesn't change from page to page
    element: <Layout/>,

    // whatever comes after the '/' i.e. /Blog options for what can change
    children: [
      {
        path: '/',
        element: <Home/>

      },
      {
        path: '/CV',
        element: <CV/>
      },
      {
        path: '/Blog',
        element: <Blog/>
      },
      {
        path: '/Art',
        element: <Art/>
      },
      {
        path: '/Preorder',
        element: <Preorder/>
      },
      {
        path: '/Subscribe',
        element: <Subscribe/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/*imported component to render what was defined in the router variable per the createBrowserRouter*/}
    <RouterProvider router={router} />
  
  </StrictMode>,
)
