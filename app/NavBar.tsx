import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <ul className="flex gap-1">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
    </ul>
  )
}

export default NavBar
// https://jsonplaceholder.typicode.com/users
