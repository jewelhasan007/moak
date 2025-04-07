"use client"
import Link from 'next/link';
import React from 'react';
import Swal from 'sweetalert2';

const page = () => {

  const handleSignUP =  async(event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      type: event.target.type.value,

    }
    console.log(newUser)
    const resp = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`,{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type" : "application/json"
      }
    })
    if(resp.status === 200){
      event.target.reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New User Created",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
    return (
        <div>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUP Page</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
<form onSubmit={handleSignUP} >
<label className="fieldset-label">Name</label>
          <input type="name" name='name' className="input" placeholder="Name" />
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <label className="fieldset-label">User Type</label>
          <select defaultValue="User Type" name='type' className="select">
          <option disabled={false}>user type</option>
          <option>Admin</option>
          <option>Moderator</option>
          <option>User</option>
          </select>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </form>
        </fieldset>
        <div>
            <p>Already have an account?<Link href={'/login'} className='text-blue-600'> Login Here</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;