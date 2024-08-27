'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='fixed top-2 z-50 w-screen px-4'>
        <div className='container flex items-center justify-between rounded-lg bg-slate-100 h-10 py-3'>
        <div>
            <Link href='/home'>Logo</Link>
        </div>
        <div className='hidden md:flex gap-4 text-slate-500'>
            <Link href='/home'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </div>
        <button className='md:hidden flex justify-center items-center w-8 h-8 rounded-full bg-slate-200'
        onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
            {menuOpen && (
                <div className='md:hidden absolute top-full right-0 gap-4 h-screen w-1/2 bg-slate-100 p-4 flex flex-col items-center justify-center'>
                    <Link href='/home'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/'>Services</Link>
                    <Link href='/'>Priceing</Link>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar