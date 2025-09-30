import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        {/* Make contact page */}
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center'>Contact Us</h1>
        <p className='text-lg md:text-xl mb-8 text-center max-w-3xl'>Have questions or need assistance? We are here to help! Reach out to us anytime, and we will get back to you as soon as possible.</p>
        <form className='w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg'>
            <div className='mb-4'>
            <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='name'>Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your Name' />
            </div>
            <div className='mb-4'>
            <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email'
                placeholder='Your Email' />
            </div>
            <div className='mb-4'>
            <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='message'>Message</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' rows='5'
                placeholder='Your Message'></textarea>
            </div>
            <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                Send Message
            </button>
            </div>
        </form>
        <Link href={"/"}>

            <button
                type="button"   
                className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8"
            >
                Go Home
            </button>
            </Link> 
    </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'Contact - Get Me a Chai',
  description: 'Get in touch with the Get Me a Chai team for support, inquiries, or feedback.',
}
