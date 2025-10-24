import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Logo() {
  return (
    <div>
          <Link href="/" className='flex items-center text-dark'>
              <div className='relative overflow-hidden w-16 h-16 rounded-full border border-solid mr-4'>
                  <Image src="/profile-img.png" alt="Jose" fill className="w-full h-auto rounded-full" />
              </div>
              <span className='font-bold text-xl'>Jose Castro</span>
          </Link>
    </div>
  )
}

export default Logo
