'use client'

import { CldImage, CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="sample image" />
      )}
      <CldUploadWidget
        uploadPreset="j7qsy94s"
        options={{ sources: ['local'], multiple: false, cropping: true }} //https://demo.cloudinary.com/uw/#/
        onUpload={(result, widget) => {
          if (result.event !== 'success') return
          const info = result.info as { public_id: string } // type assertion
          // console.log(result)
          setPublicId(info.public_id)
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
