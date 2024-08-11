import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="top">
            <div className="links">
                <Link href="/card1">card1</Link>
                <Link href="/card1">card1</Link>
                <Link href="/card1">card1</Link>
            </div>
            <div className="contactUs">
               <h3>Contact Us</h3> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quidem a magnam.</p>
            </div>
        </div>
      <div className="copy"></div>
    </div>
  )
}

export default Footer
