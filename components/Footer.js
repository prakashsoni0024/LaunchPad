import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-gray-300 flex justify-center items-center px-4 h-16'>
      <p className='text-[15px]'>Copyright &copy; {currentYear} LaunchPad - All rights reserved.</p>
    </footer>
  );
}

export default Footer
