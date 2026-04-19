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
        <h2>{props.heading}</h2>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#2f3133':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container" my-3 style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minuts</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter somthing in the textbox to preview it here"}</p>
      </div>

      </>
    
  )
}
