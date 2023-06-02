
// import GrapesJSConfig from './config/grapesjs.config';
import router from "./routes"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
