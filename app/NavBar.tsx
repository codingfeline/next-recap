'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession()

  return (
    <div className="flex gap-1 bg-slate-200 p-3 space-x-3">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      {/* {status === 'loading' && <div>Loading...</div>} */}
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}
      {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar
// https://jsonplaceholder.typicode.com/users
