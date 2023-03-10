import React, {useState} from 'react';

const NavigationBar = () => {
    const [isClicked, setIsClicked] = useState(false)

    const toggleBar = () => {
        if(isClicked) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }


    return(
        <>
        <nav>
            <div className='navbarblock'></div>
            <div className='navbarblock'></div>
            <div className='navbarblock'></div>
        </nav>
        </>
    )

}

export default NavigationBar