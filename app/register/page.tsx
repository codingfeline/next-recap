'use client'

import React, { useState } from 'react'
import InputElement from './Input'

const RegisterUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('clicked', new Date())
  }

  return (
    <>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <InputElement
          name={name}
          label="Full name"
          onChange={e => setName(e.target.value)}
        />
        <InputElement
          type="email"
          name={email}
          label="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <InputElement
          type="email"
          name={repeatEmail}
          label="Repeat Email"
          onChange={e => setRepeatEmail(e.target.value)}
        />
        <button className="btn btn-primary mt-2">Register</button>
      </form>
    </>
  )
}

export default RegisterUser
