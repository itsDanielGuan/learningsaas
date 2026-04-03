import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignInButton, SignUpButton, Show, UserButton} from '@clerk/nextjs'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={46}
                    height={44}
                />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems/>
            <Show when="signed-out">
                <SignInButton>
                    <button className='btn-signin'>Sign In</button>
                </SignInButton>
            </Show>
            <Show when="signed-in">
                <UserButton />
            </Show>
        </div>
    </nav>
  )
}

export default Navbar