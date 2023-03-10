import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'

const HomePage = ({theme}) => {
  const [divtheme, setdivtheme] = useState('linksToStrategies')
  const [textTheme, setTextTheme] = useState('text')
  const [animationStyle, setAnimationStyle] = useState(false)

  useEffect(() => {
    if(theme === 'dark') {
      setdivtheme('linksToStrategiesDark')
      setTextTheme('text_dark')
      setAnimationStyle(true)
    } else { setdivtheme('linksToStrategies')
  setTextTheme('text')
  setAnimationStyle(false)}
  },[theme])

  return (
    <>
    <div className='homepage'>
      <h1 id = {textTheme}>
      Strategy Profit Calculator
      </h1>
    <div className={divtheme}>
      <div>
        <NavLink to= "/makestrategy">
        Ema Calculator
        </NavLink>
      </div>
    </div>
    {animationStyle ? (<>
    <div className='darktheme x1'></div>
  <div className='darktheme x2'></div>
  <div className='redCandle x3'></div>
  <div className='darktheme x4'></div>
  <div className='darktheme x5'></div>
  <div className='darktheme x6'></div>
  <div className='redCandle x7'></div>
  <div className='redCandle x8'></div>
  <div className='darktheme x9'></div>
  <div className='redCandle x10'></div>
  <div className='redCandle x11'></div>
  <div className='darktheme x13'></div>
  <div className='darktheme x14'></div>
  <div className='darktheme x15'></div>
  <div className='redCandle x16'></div>
  <div className='darktheme x17'></div>
  <div className='darktheme x18'></div>
    </>
    ) : (
      <>
    <div className='light x1'></div>
  <div className='light x2'></div>
  <div className='redCandle x3'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='redCandle x7'></div>
  <div className='redCandle x8'></div>
  <div className='light x9'></div>
  <div className='redCandle x10'></div>
  <div className='redCandle x11'></div>
  <div className='light x13'></div>
  <div className='light x14'></div>
  <div className='light x15'></div>
  <div className='redCandle x16'></div>
  <div className='light x17'></div>
  <div className='light x18'></div>
      </>
  )}
      </div>
    </>
  )
}

export default HomePage