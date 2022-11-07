import React from "react";
//import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
	return(
		<header className='nav'>
			<p className='logo'>Logo</p>
			<input type="checkbox" className='click'/>
			<label for="click" className='menu_btn'>
				<i className='fas fa-bars' ></i>
			</label>
		
			<ul className='nav__links'>
				<li className='navlist'><Link className='navlinks' to="/">Main</Link></li>
				<li className='navlist'><Link className='navlinks' to="/ourGame">Our Game</Link></li>
				<li className='navlist'><a className='navlinks' href="/">Element-2</a></li>
				<li className='navlist'><a className='navlinks' href="/">Element-3</a></li>
				<li className='navlist'><a className='navlinks' href="/">About</a></li>
			</ul>
		
			<a className='cta' href="/"><button className='btn'>Contact</button></a>
		</header>
	)

}

// className={`${classes.description} ${classes.yellow}`}
