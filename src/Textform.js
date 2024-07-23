
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
         console.log("On change");
        setText(event.target.value)
    }


    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState(''); 
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#BEDBED':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}