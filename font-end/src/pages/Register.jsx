import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [busineddName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessContact, setBusinessContact] = useState("");
  const [businessLogo, setBusinessLogo] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [phoneNumber, setNumber] = useState("");

  const [isLastScreen, setIsLastScreen] = useState(false);
  const handleNavigate=(e)=>{
    e.preventDefault()
    setIsLastScreen(true);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  }

  return (
    <>
    <div className="container pt-5">
{isLastScreen && <div className='flex flex-row align-items-center '> 
<BsFillArrowLeftCircleFill className='text-5xl ml-5' onClick={()=>setIsLastScreen(false)}/>
<h4 className="block text-2xl ml-4 mt-2" > Back to personal Information </h4>  
</div>}
{ !isLastScreen ?
  <div className="hero h-64 ">

 <form onSubmit={handleNavigate}>
  <div className="w-full max-w-lg md:shadow-2xl bg-base-300 mt-10 lg:mt-20" >
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
       <div className="form-control mt-6 text-center">
        <p className="text-lg">
          Already have an account? <a href="/login" className="link link-hover text-purple-600">Login</a>
        </p>
       </div>
    </div>
  </div>
  </form>
  </div>:<div className="hero h-64 ">

<form action='post' onSubmit={handleSubmit}>
 <div className="w-full max-w-lg md:shadow-2xl bg-base-300 mt-10 lg:mt-10" >
   <div className=" p-20">
     <h3 className=' text-2xl text-center'>
     Enter your business details to create account and handle your business services
     </h3>
      <div className="form-control">
       <label className="label">
         <span className="label-text">Business Name</span>
       </label>
       <input type="text" placeholder="Business name" className="input input-bordered" value={busineddName}  onChange={(e) => setBusinessName(e.target.value)} required/>
       
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Business Contact</span>
       </label>
       <input type="tel" placeholder="Contact" className="input input-bordered" value={businessContact}  onChange={(e) => setBusinessContact(e.target.value)} required/>
       
     </div>
     <div className="form-control w-full">
       <label className="label">
         <span className="label-text">Business Email</span>
       </label>
       <input type="email"  placeholder="Email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} className="input input-bordered" required/>
     </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Business Logo</span>
        </label>
        <input type="file" value={businessLogo} onChange={(e) => setBusinessLogo(e.target.value)} className="input input-bordered form-input mt-2"
      accept="image/*"required />
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

