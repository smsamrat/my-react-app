import React, {useState} from 'react'

export default function FormText(props) {
    const handleChangeUppercase = ()=>{
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("I am uppercase","success")

    }
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('type here')
  return (
    <>
    <div className="container">
        <div className="mb-3">
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label> */}
        <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className='btn btn-primary' onClick={handleChangeUppercase}>Change to uppercase</button>
        </div>
    </div>
    <div className='container'>
    <p>{text.length} characters <span>{text.split(' ').length}words</span></p>
    </div>


    
    </>
  )
}
