// app/form/page.tsx
'use client'

import { useState } from 'react'
import { submitForm } from './action'

export default function FormPage() {
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    const result = await submitForm(formData)
    if (result.success) {
      setMessage(result.message)
    }
  }

  return (
    <main>
      <h1>Simple Server Action</h1>
      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  )
}
