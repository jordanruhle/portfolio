import React from 'react'

const PillButton = ({buttonColor, textColor, hoverColor, buttonText, hoverTextColor}) => {

  return (
    <button className={`${buttonColor} ${textColor} hover:${hoverColor} hover:${hoverTextColor} m-2 font-semibold text-xl py-2 px-12 rounded-full transform hover:scale-105 hover:drop-shadow-md transition duration-200`}>{buttonText}</button>
  )
}



export default PillButton