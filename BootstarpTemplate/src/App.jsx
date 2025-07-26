import { useState } from 'react'
import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-danger min-vh-100 d-flex justify-content-center align-items-center">
  <div className="main bg-white row g-0 container rounded shadow p-0">
      <div className="left col-lg-6 col-md-6 d-flex flex-column justify-content-center p-5 p-md-5">
        <h1 className="fw-bold mb-3 fs-2 fs-md-1">Hi, I'm John Deo.</h1>
        <p>A Freelance Web Developer from London. I convert custom web designs to Bootstrap templates.</p>
        <p>I make YouTube videos and write Blog.</p>
        <button className="btn btn-primary w-50 w-md-50 mb-3 fw-bold">I'm AVAILABLE</button>
        <span className="d-flex align-items-center fs-5">
          <FaFacebookF className='me-3' />
          <CiTwitter className='me-3' />  
          <FaInstagram className='me-3' />
          <FaLinkedinIn className='me-3' />
        </span>
      </div>
      <div className="right col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
        <img src="./public/images/user.png" className="img-fluid" alt="User" />
      </div>
    </div>
  </div>
  )
}

export default App
