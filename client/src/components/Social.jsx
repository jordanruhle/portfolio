import React from 'react';
import gmailLogo from '../assets/icons/gmail.svg'
import githubLogo from '../assets/icons/gitHub.svg'
import linkedInLogo from '../assets/icons/linkedin.png'

const SocialLinks = () => {
  return (
    <footer className='py-4 bg-neutral-800'>
    <div className='mx-auto flex justify-between items-center max-w-screen-xl gap-8 '>
      <p className='text-white text-xl'>Jordan Ruhle</p>
      <ul className='flex justify-center items-center gap-8'>
        <li><a href="https://github.com/jordanruhle"><img src={githubLogo} alt="gmail" className='h-14'/></a></li>
        <li><a href="https://www.linkedin.com/in/jordan-ruhle-76317198/"><img src={linkedInLogo} alt="gmail"  className='h-14'/></a></li>
        <li><a href="mailto:youremail@gmail.com"><img src={gmailLogo} alt="gmail" className='h-16'/></a></li>
      </ul>
      <p className='text-white text-xl'>jordanruhle@gmail.com</p>
    </div>
  </footer>
  )
}

export default SocialLinks