import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [isLastScreen, setIsLastScreen] = useState(false);
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    setIsLastScreen(true);
  }
  return (
    <>
    <div className="container pt-5">
{isLastScreen && <div className='flex flex-row align-items-center '> 
<BsFillArrowLeftCircleFill className='text-5xl ml-5' onClick={()=>setIsLastScreen(false)}/>
<h4 className="block text-2xl ml-4 mt-2" > Back to personal Information </h4>  
</div>}
{ !isLastScreen && 
  <div className="hero h-64 ">

 <form onSubmit={handleSubmit}>
  <div className="w-full max-w-lg md:shadow-2xl bg-base-300 mt-10 lg:mt-10" >
    <div className=" p-20">
      <h3 className=' text-2xl text-center'>
        Enter your personal details to create account
      </h3>
       <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" className="input input-bordered" value={name}  onChange={(e) => setName(e.target.value)} required/>
        
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input type="tel" placeholder="Phone Number" className="input input-bordered" value={phoneNumber}  onChange={(e) => setNumber(e.target.value)} required/>
        
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email"  placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required/>
      </div>
     
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" value={password} placeholder= "if you are a girl enter your phone number" onChange={(e) => setPassword(e.target.value)} className="input input-bordered" required />
        <label className="label">
          {/* <a href="" className="label-text-alt link link-hover">Forgot password?</a> */}
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Continue</button>
      </div>
    </div>
  </div>
  </form>
  </div>}
</div>

    </>
  )
}

export default Register