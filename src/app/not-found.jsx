import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>404 Not Found</h1>
        <Link href="/">
        Go Back To Home
        </Link>
    </div>
  )
}
