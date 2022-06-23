import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, SetText] = useState("Enter Your Text Here");
    const handleUpClick= ()=>{
      console.log("to upper case clicked");
      let newText=text.toUpperCase();
      SetText(newText);
    }
    const handleLoClick= ()=>{
        console.log("to lower case clicked");
        let newText=text.toLowerCase();
        SetText(newText);
      }
      const handleClrClick= ()=>{
        console.log("to upper case clicked");
        let newText='';
        SetText(newText);
      }
    const handleOnChange= (event)=>{
        console.log("on change clicked");
        SetText(event.target.value);
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        /*props.showAlert("Copied to Clipboard!","success");*/
    }
    const handleExtra =()=>{
      let txt=text.split(/[ ]+/)
     SetText(txt.join(" "))
    }
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}} >
        <h2>{props.heading}</h2>
        <div className="my-3">
       <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
       </div>
       <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>TO-UPPERCASE</button>
       <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>TO-LOWERCASE</button>
       <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>CLEAR</button>
       <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
       <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtra}>Equalize Spacing</button>
       </div>
       <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
           <div className="container my-2" style={{border:'1px solid',borderColor: props.mode ==='dark'?'white':'black',borderRadius:'5px'}}>
           <h2 style={{display:'flex',justifyContent:'center'}}>Text Summary</h2>
           <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words </p> <p>{text.length} characters</p>
           <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes avg read </p>
           </div>
           <div className="container" style={{border:'1px solid',borderColor: props.mode ==='dark'?'white':'black',borderRadius:'5px'}}>
           <h2 style={{display:'flex',justifyContent:'center'}}>Preview</h2>
           <p>{text.length >0 ? text :"Nothing To Preview"}</p>
           </div>
       </div>
      </>

    )
}
TextForm.defaultProps =
{
    heading: "Enter Text Here"
}