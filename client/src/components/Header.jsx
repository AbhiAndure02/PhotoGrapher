import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import {FaInstagram, FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'
import { useState } from "react"

export default function Header() {
    const [click, setClick] =useState(false)
    
    const handlClick = () => {
        setClick(!click);
    }
   

    const content =<>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 text-white bg-slate-900 transition">
      <ul className="text-center text-xl p-20  ">
        <Link spy={true} smooth={true} to="/">
        <li className="my-4 py-4 border-b-2 border-slate-800 hover:bg-slate-800 hover:rounded ">Home </li>
        </Link>
        <Link smooth={true} to="/about">
        <li className="my-4 py-4 border-b-2 border-slate-800 hover:bg-slate-800 hover:rounded ">About </li>
        </Link>
        <Link smooth={true} to="/contact">
        <li className="my-4 py-4 border-b-2 border-slate-800 hover:bg-slate-800 hover:rounded ">Contact</li>  
        </Link>
        <Link smooth={true} to="/project">
        <li className="my-4 py-4 border-b-2 border-slate-800 hover:bg-slate-800 hover:rounded ">Projects </li>
        </Link>
        <Link smooth={true} to="/Headshot">
        <li className="my-4 py-4 border-b-2 border-slate-800 hover:bg-slate-800 hover:rounded ">Headshot</li>
        </Link>
      </ul>
    </div>
    </>
  return (
    <Navbar fluid rounded className="m-4 flex-1 ">
        <div className=" flex-1">
            <h1>Logo</h1>
        </div>
 
        <div className="lg:flex gap-6 hidden">
        <Link className="my-2" to='/'>Home</Link>      
        <Link className="my-2" to='/about'>About</Link>
        <Link className="my-2" to='/contact'>contact</Link>
        <Link className="my-2" to='/headshot'>Headshots</Link>
        <Link className="my-2" to='/project'>Project</Link>
        <div className="hidden lg:flex flex-1 m-2">
        <a className="text-2xl text-pink-500" target="_blank" rel="noopner noreferrer" href="https://www.instagram.com/i__am__abhi__/"><FaInstagram /></a>
        </div>
        </div>

        <div>
                {click && content}
            </div>

        <button className=" sm:hidden transition" onClick={handlClick}>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
            

        
    </Navbar>
  )
}
