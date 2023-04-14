import React, { useState } from 'react'
import PillButton from './PillButton'

const ProjectDetails = ({ hide, sethide }) => {



  return (
    <div className={`${hide ? 'hidden' : 'block'} fixed left-0 top-0 backdrop-blur-lg mx-auto h-full w-full p-10 z-20`}>
      <div className='text-5xl h-full w-full backdrop-blur-md bg-white p-4 shadow-md rounded-lg'>
        <div className=' flex justify-between items-center'>
          <h2>Mountain Bikes Store</h2>
            <PillButton onClickAction={e => sethide(true)} buttonText='Close' buttonColor='bg-gray-200' hoverColor='bg-gray-100' />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails