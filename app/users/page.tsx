import React from 'react'
import UserTable from '../components/UserTable'

interface Props {
  searchParams: { sortOrder: string }
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  )
}

export default UsersPage

/*
next caching using fetch
next: { revalidate: 10, for 10 seconds }
*/
