import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from './App'
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import "./index.css";
import { ThemeProvider } from "./Hooks/useTheme"

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
localStorage.setItem('theme', '')
const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App/>,
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

root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <Navbar />
      <Home />
      <Footer />  */}

      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
