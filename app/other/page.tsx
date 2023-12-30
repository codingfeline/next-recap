'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// import BigComponent from '../components/BigComponent'

const Heavy = dynamic(() => import('@/app/components/BigComponent'), {
  loading: () => <p>Loading...</p>,
})

const OtherPage = () => {
  const [isVisible, setVisible] = useState(false)

  return (
    <div>
      <h2>Other page</h2>
      <button onClick={() => setVisible(true)}>Show Big Component</button>
      {isVisible && <Heavy />}
    </div>
  )
}

export default OtherPage
