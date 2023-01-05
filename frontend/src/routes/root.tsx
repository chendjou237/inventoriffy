import React from 'react'
import { useEffect, useState } from 'react';
import {postUser} from '../functions/user.functions';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export default function Root() {
    const [email, setEmail] = useState<string>('no data');
    const [name, setName] = useState<string>('no data');
    const [password, setPassword] = useState<string>('no data');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const notify = () => toast("user created with success")
    useEffect(() => {
      
    }, []);
    // const navigate = useNavigate();
  const  handleSubmit  =async (e: React.FormEvent) => {

      e.preventDefault();
      setIsLoading(true)
      notify()
      // const user = {email, name, password};
      if(  await  postUser(email, name, password) != null){
    // navigate("/warehouse")

    setIsLoading(false)
  }
    }
  return (
<>
<div className="container">

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-6 w-64">This is just a test it was just to check the connection between the backend, the frontend with database through a crud operation</p>
    </div>
    <form action="post" onSubmit={handleSubmit}>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="let me scam your email" onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Whats up?" className="input input-bordered" onChange={(e) => setName(e.target.value)} required/>
          <label className="label">
            {/* <a href="" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  placeholder= "if you are a girl enter your phone number" onChange={(e) => setPassword(e.target.value)} className="input input-bordered" required />
          <label className="label">
            {/* <a href="" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled= {isLoading}>SignUp</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
</div>
</>
  )
}
