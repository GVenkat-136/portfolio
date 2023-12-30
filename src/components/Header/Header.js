import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { TfiPulse } from "react-icons/tfi";
export default function Header() {
   return (
      <div className='Header_container'>
         <div className='Header_wapper'>
            <div className='headingName'>
               <h4><TfiPulse /> Venkata Narendra</h4>
            </div>
            <div className='Header_list'>
               <a className='isactive'><span>#</span>Home</a>
               <a><span>#</span>Skills</a>
               <a><span>#</span>Projects</a>
               <a><span>#</span>Contact</a>
            </div>
         </div>
      </div>
   )
}
