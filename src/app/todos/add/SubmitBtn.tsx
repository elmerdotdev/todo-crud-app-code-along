'use client'

import { useFormStatus } from "react-dom"

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className="py-1 px-3 bg-black border" disabled={pending}>Add</button>
  )
}

export default SubmitBtn