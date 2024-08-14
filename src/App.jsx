
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import LandingPage from './pages/landing'
import Navbar from './components/navbar'

const router = createBrowserRouter([
  
  {
    
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <LandingPage/>
      }
    ]
  }
]) 

function App() {

  return (
   <div className="overflow-x-hidden absolute  top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
<RouterProvider router={router} />
   </div>
     
  )
}

export default App
