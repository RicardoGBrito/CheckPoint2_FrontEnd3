
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'home',
          element: <Home/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'detail',
          element: <Detail/>
        }
      ]
    }

  ])

  return (
    <RouterProvider router={appRouter} />
  )
 
    

export default App;
