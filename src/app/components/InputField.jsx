import React from 'react'

const InputField = ({label="",error="",...inputProps}) => {
  return (
    <div style={{position:'relative'}} >
       <label>{label}</label>
          <input {...inputProps} />
            <span className='error-text' >{error}</span>
    </div>
  )
}

export default InputField
