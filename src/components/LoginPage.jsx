import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('') 

    function handleLogin(event){
      event.preventDefault 
      const payload = {
        email: email,
        password:password
      }

      localStorage.setItem('loginUser', JSON.stringify(payload))
    }

  return (
    <div className='container w-50 mx-auto border shadow mt-5 rounded-2 p-3'>
      <form>
        <h1>Login page</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" value={email}
     onChange ={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password1" value={password} 
     onChange ={(e) => setPassword(e.target.value)}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="Check1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
</form>
    </div>
  )
}

export default LoginPage