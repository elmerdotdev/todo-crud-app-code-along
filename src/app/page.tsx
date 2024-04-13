import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - To Do App',
  description: 'This is the home page'
}

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page of the website.</p>
    </div>
  )
}

export default page