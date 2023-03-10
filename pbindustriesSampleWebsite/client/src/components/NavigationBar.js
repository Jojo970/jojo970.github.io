import React from 'react';
import {NavLink} from 'react-router-dom'

const NavigationBar = () => {

    return(
        <>
        <nav className='navigationBar'>
            <ul className='navlist'>
                <li className='navitems'><NavLink className='navlink'>What We Do</NavLink></li>
                <li className='navitems'><NavLink className='navlink'>Case Studies</NavLink></li>
                <li className='navitems'><NavLink className='navlink'>Process</NavLink></li>
                <li className='navitems'><NavLink className='navlink'>FAQ</NavLink></li>
                <li className='navitems'><NavLink className='navlink'>Contact</NavLink></li>
                <li className='navitems'><NavLink className='navlink'>Quote</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default NavigationBar