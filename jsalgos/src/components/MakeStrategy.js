import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const MakeStrategy = ({setEmaOne, setEmaTwo, name, setName, theme}) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [divtheme, setdivtheme] = useState('setParams');
  const [pagetheme, setpagetheme] = useState('setParamsBackground');
  const [animationStyle, setAnimationStyle] = useState(false)

  useEffect(() => {
    if(theme === 'dark') {
      setdivtheme('setParamsDark');
      setpagetheme('setParamsBackgroundDark')
      setAnimationStyle(true)
    } else { setdivtheme('setParams')
    setpagetheme('setParamsBackground')
    setAnimationStyle(false)}
  },[theme])


  useEffect(() => {
    axios.get("https://api.binance.us/api/v3/exchangeInfo")
    .then((res) => {
      let assets = res.data.symbols
      const assetToChoose = assets.filter(asset => asset.quoteAsset === "USDT")
      console.log(assetToChoose)
      setList(assetToChoose)
    })
  },[])

  const strategyCalculate = () => {
    navigate('/displayresults')
  }



  return (
    <>
    <div className={pagetheme}>
      <div className='blockThing'> </div>
    <form onSubmit={strategyCalculate} className={divtheme}>

      <label>Base Asset</label>
      <select className='input' value={name} name = "cryptoName" onChange={(e) => setName(e.target.value)}>
                {list.map((asset) => {
                    return(
                        <option key = {asset.baseAsset}>{asset.baseAsset}</option>
                    )
                })}
            </select>

      <label>EMA 1 (SHOULD BE THE LESSER VALUE)</label>
      <input type= 'number' onChange= {(e) => {setEmaOne(e.target.value)}} required/>

      <label>EMA 2</label>
      <input type= 'number' onChange= {(e) => {setEmaTwo(e.target.value)}} required/>

      <button>Calculate</button>

    </form>
    <div className='blockThing'> </div>
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

export default MakeStrategy