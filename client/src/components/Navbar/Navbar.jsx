import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className='text-2xl text-black'>
                <Link className=' mr-4' to='/'> Home</Link>
                <Link className=' mr-4' to='/dogs'> Dogs</Link>
                <Link className=' mr-4' to='/cart'>My Cart</Link>
            </nav>
        </>
    )
}

export default Navbar