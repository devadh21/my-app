// app/form/action.ts
'use server'

export async function submitForm(formData: FormData) {
  const name = formData.get('name') as string

  // For demo: log or return something
  console.log('Received name:', name)

  // You could store to DB, send email, etc. here
  return { success: true, message: `Hello, ${name}` }
}
