import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
  <>
    {/* make about page for get me chai using tailwind css proffessionally */}
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4'>
      <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center'>About Get Me a Chai</h1>
      <p className='text-lg md:text-xl mb-8 text-center max-w-3xl'>Get Me a Chai is a platform that allows creators to receive support from their fans in the form of small donations, or . Our mission is to empower creators to continue making great content by providing them with a simple and effective way to monetize their work.</p>
      <div className='flex flex-col md:flex-row gap-4'>
        <Link href={"/"}>
          <button
            type="button"
            className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Go Home
            </button></Link>
        <Link href={"/contact"}>
            <button
                type="button"   
                className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Contact Us
            </button>
            </Link>
      </div>
    </div>

   </>
  )
}

export default page

export const metadata = {
  title: 'About - Get Me a Chai',
  description: 'Learn more about Get Me a Chai, our mission, and how we support creators.',
}
