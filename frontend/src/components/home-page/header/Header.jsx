import './styles.css';

import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <h1 className="title">Wij Chat</h1>
        <div className='register'>
            <button className='sign-in-btn' id='sign-in-btn'>Sign in/Sign up</button>
        </div>
    </div>
  )
}
