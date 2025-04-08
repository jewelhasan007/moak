"use client"
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React from 'react';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const handleLogin = async(event) => {
    event.preventDefault();
   const email= event.target.email.value;
   const password= event.target.password.value
   const resp = await signIn("credentials",{
    email, 
    password, 
    redirect :false
   })
  if(resp.status === 200){
    router.push('/')
  }
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <form  onSubmit={handleLogin}>
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

          </form>
        
        </fieldset>
        <div>
            <p>New Here?<Link  href={'/signup'} className='text-blue-600'> Please Register</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;