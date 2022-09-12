import React from 'react'
import './LoadingSpinner.css'

export const LoadingSpinner = ({isVisible}) => {
  return (
    <>
        <div className='bg' style={{display: isVisible ? "block" : "none"}}></div>
        <div className="sk-chase" style={{display: isVisible ? "block" : "none"}}>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </>
  )
}
