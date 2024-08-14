import React from 'react'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>13 BEIGE ST Gbawe</p>
            <p className='my-4'>+233 249120881</p>
            <a href="mailto:afrifae2@gmail.com?subject=Inquiry&body=Hello%20Eunice,%0A%0A"
            className='hover:underline'>
                afrifae2@gmail.com
            </a>
        </div>
    </div>
  )
}

export default Contact