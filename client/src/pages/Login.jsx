import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
  return (
    <section>
      <div className='w-[700px] h-[600px] bg-white'>
            <form action="">
                <label htmlFor="email">Email</label>
                <input id='email' type="text" />
            </form>
      </div>
    </section>
  )
}

export default Login
