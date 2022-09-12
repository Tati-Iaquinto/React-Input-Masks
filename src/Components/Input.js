import React from 'react'
import '../index.css'

const Input = ({id, label, value, type, onChange, className, placeholder}) => {
  return (
    <div className='inputDiv'>
      <label>{label}</label>
      <input id={id} value={value} type={type} onChange={onChange} className='input' placeholder={placeholder}/>
    </div>
  )
}

export default Input