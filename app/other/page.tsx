'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// import BigComponent from '../components/BigComponent'
// import _ from 'lodash'

const Heavy = dynamic(() => import('@/app/components/BigComponent'), {
  ssr: false, // * to disable pre-rendering on the server if accessing browser APIs on the server
  loading: () => <p>Loading...</p>,
})

const OtherPage = () => {
  const [users, setUsers] = useState([{ name: 'c' }, { name: 'b' }, { name: 'a' }])
  const [isVisible, setVisible] = useState(false)

  return (
    <div>
      <h2>Other page</h2>
      <button onClick={() => setVisible(true)}>Show Big Component</button>
      {isVisible && <Heavy />}

      <hr />
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default
          // const _ = await import('lodash')
          const sorted = setUsers(_.orderBy(users, ['name']))
          console.log(sorted)
        }}
      >
        Sort
      </button>
      <hr />
      {JSON.stringify(users)}
    </div>
  )
}

export default OtherPage
