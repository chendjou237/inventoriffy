import React from 'react'
import { useRouteError } from 'react-router-dom'
import './App.css';
export default function ErrorPage() {
    const error:any = useRouteError();
    console.log(error);
    
  return (
    <div>
        {/* error page  with tailwindcss*/}

        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-9xl font-bold">{400}</div>
            <div className="text-2xl font-bold">Page Not Found</div>
            <div className="text-xl font-bold">The page you are looking for does not exist.</div>
            {/* errror message style */}

            <div className="text-xl font-bold">{error.message || error?.statusText}</div>
            <div className="stats shadow">

  
</div>
            </div>
            <div className="stats shadow">
  
≈
</div>
    </div>
  )
}
