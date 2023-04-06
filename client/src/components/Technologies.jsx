import React from 'react'

const Technologies = ({bgColor, textColor, text}) => {
  return (
    <div className={`${bgColor} ${textColor} font-semibold p-2 rounded-md`}>{text}</div>
  )
}

export default Technologies