import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =() =>{
    // console.log("upper case was clicked"+ text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success")
  }
   const handleLoClick =() =>{
    // console.log("upper case was clicked"+ text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!", "success")
  }
  const handleClearClick =() =>{
    // console.log("upper case was clicked"+ text)
    let newText = '';
    setText(newText)
    props.showAlert("text cleard!", "success")
  }
  const handleCopy = () =>{
    var text = document.getElementById("mybox");
    text.select(); 
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to cliboard!", "success")
  }
  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success")
  }
    const handleOnChange =(event) =>{
    // console.log("on change")
    setText(event.target.value)
  }
  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#2f3133':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} minuts</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview!"}</p>
      </div>

      </>
    
  )
}
