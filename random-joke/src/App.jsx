import Home from "./components/home/Home"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import JokePage from "./components/jokePage/JokePage"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home />} />
      <Route path="/joke" element={<JokePage />} />
      </>
    )
  )
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
