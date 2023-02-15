import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue ,setInputValue]=useState('');
  const [click, setClick] =useState('')

  const onInputChange = (e) =>{
    setInputValue(e.target.value);
};
console.log(inputValue);

  const handleSubmit = (e)=>{
    e.preventDefault()

    setClick(inputValue);
    setInputValue('')
  
  }
  return (
    <>
    <h1>Qr Code Generator</h1>
    <form onSubmit={handleSubmit}>
    <input value={inputValue} onChange={onInputChange}/>
    <button>Generate QR</button><br/>
    </form>
    <QRCodeSVG value={click}/>
    </>
  );
}

export default App;
