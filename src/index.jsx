import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from './App'
import { 
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import "./index.css";
import { ThemeProvider } from "./Hooks/useTheme"
import { DentistInfoProvider } from "./Hooks/useDentistInfo"
import { LocalStorageTokenProvider } from "./Hooks/useLocalStorageToken";
import { PatientInfoProvider } from "./Hooks/usePatientInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui


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
        path: 'dentist/:id',
        element: <Detail/>
      },
      // {
      //   path: 'detail',
      //   element: <Detail/>
      // },
      { path: '', loader: () => redirect('/home')}
    ]
  }

])

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocalStorageTokenProvider>
        <DentistInfoProvider>
          <PatientInfoProvider>
            <RouterProvider router={appRouter} />
          </PatientInfoProvider>
        </DentistInfoProvider>
      </LocalStorageTokenProvider>
    </ThemeProvider>
  </React.StrictMode>
);
