import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MakeStrategy from './components/MakeStrategy';
import DisplayResults from './components/DisplayResults';
import {useState} from 'react';
import howto from "./howto.png";

function App() {
  const [emaOne, setEmaOne] = useState(null)
  const [emaTwo, setEmaTwo] = useState(null)
  const [theme, setTheme] = useState('light')
  const [buttonTheme, setButtonTheme] = useState('lightTheme')
  const [name, setName] = useState('BTC')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setButtonTheme('dark')
      } else {
      setTheme('light');
      setButtonTheme('lightTheme')
    }
  };


  return(
  <>
  <BrowserRouter>
    <div id={theme}>
    <div id = "togglebutton" className = {buttonTheme}><img  onClick = {toggleTheme} src= {howto} alt= "darkmodetoggle"/></div>
      <Routes>
        <Route path = "/" element= {<HomePage theme = {theme}/>} />
        <Route path = "/makestrategy" element= {<MakeStrategy setEmaOne = {setEmaOne} setEmaTwo = {setEmaTwo} name={name} setName={setName} theme = {theme}/>} />
        <Route path = "/displayresults" element = {<DisplayResults  emaOne = {emaOne} emaTwo = {emaTwo} name={name} theme = {theme}/>} />
      </Routes>

    </div>
  </BrowserRouter>
  </>
  )
}

export default App;
