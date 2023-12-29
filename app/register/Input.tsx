import React from 'react'

interface Props {
  name: string
  label: string
  type?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputElement = ({ name, label, type = 'text', onChange }: Props) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={name}
        onChange={onChange}
      />
    </label>
  )
}

export default InputElement
