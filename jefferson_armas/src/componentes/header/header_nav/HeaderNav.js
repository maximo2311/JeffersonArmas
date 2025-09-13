import { NavLink } from "react-router-dom"
import './headerNav_style.css'

export const Nav = ({boton}) => {
    return (
        <nav className={`center NavPosition ${boton ? 'cerradoMenu' : 'abiertoMenu'}`}  >
            <ul className="listaNav">
                <li className="center"><NavLink to='/contact' className='a'>Contact</NavLink></li>
                <li className="center"><NavLink to='/projects' className='a'>Projects</NavLink></li>
                <li className="center"><NavLink to='/me' className='a'>Me</NavLink></li>
            </ul>
        </nav>
    )
}