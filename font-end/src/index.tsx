import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from './error';
import Warehouse from './routes/warehouse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "warehouse/:warehouseId",
        element: <Warehouse />,
        // errorElement: <ErrorPage />,
      },
    ],
  },
 
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
