import React from 'react'

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color :'black',
  //   backgroundColor:'white'
  
  // })
 let myStyle ={
  color: props.mode === 'dark'?'white':'black',
  backgroundColor: props.mode ==='dark'?'rgba(19, 19, 24, 0.49)':'white',

 } 
  return (
        <div className='container' style={{color: props.mode ==='dark'?'white':'rgba(19, 19, 24, 0.49)'}}>
          <h2 className='my-3'>About us</h2>
              <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong> 
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.. TextUtils reports the number of word and characters. Thus it is suitable for writing for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header"> 
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web Browsers such as chrom , firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books , excel document , pdf document , essays, etc.
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
