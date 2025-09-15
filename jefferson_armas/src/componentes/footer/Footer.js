import { NavLink } from "react-router-dom"
import './footerStyle.css';

const Footer = () => {
    return(
        <nav className='nav_footer center' translate="no"  >
            <ul className="nav_list_footer">
                        <li className='contact_boton center'><NavLink to='/contact' className='boton_nav_footer center' >contact</NavLink></li>
                        <li className='projects_boton center'><NavLink to='/projects' className='boton_nav_footer center'>projects</NavLink></li>
                        <li className='me_boton center '><NavLink to='/me' className='boton_nav_footer center'>me</NavLink></li>
            </ul>
        </nav>
    )
} 

export default Footer;