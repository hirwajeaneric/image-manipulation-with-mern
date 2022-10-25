import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav style={{
            background: 'black',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: '20px'
        }}>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Home</Link>
            <Link to='new' style={{color: 'white', textDecoration: 'none'}}>New</Link>
        </nav>
        <main style={{
            width: '100%',
            height:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <Outlet />
        </main>
    </div>
  )
}

export default Home