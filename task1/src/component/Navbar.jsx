
// import Link from 'next/link'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div style={{display:'flex', justifyContent:'center', gap:'200px',backgroundColor:'purple', padding:'10px', fontSize:20}}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>
      </div>
    </>
  )
}

export default Navbar