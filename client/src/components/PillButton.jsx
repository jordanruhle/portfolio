import React from 'react'

const PillButton = ({buttonColor, textColor, hoverColor, buttonText, hoverTextColor}) => {

  return (
    <button className={`${buttonColor} ${textColor} hover:${hoverColor} hover:${hoverTextColor} m-2 hover:drop-shadow-md font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition duration-200`}>{buttonText}</button>
  )
}



export default PillButton