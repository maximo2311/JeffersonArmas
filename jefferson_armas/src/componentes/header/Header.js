import { Nav } from "./header_nav/HeaderNav"
import { useState } from "react"
import './header_style.css';
import { NavLink } from "react-router-dom";

const Header = () => {


    const [boton, setBoton] = useState(true);

    function handleButton () {
            setBoton (prev => !prev);
    }

    return (
        <header className="center">
            <div className="container-del-Header">
                <div translate="no" className='logo-h'>
                    <h1><NavLink to='/' className='b'><strong>J</strong></NavLink>efferson Armas</h1>
                </div>
                <div translate="no" className="container-Nav">
                    {/* BARRA DE NAVEGACION */}
                    <Nav boton={boton} />
                </div>
                <button className="boton_desplegable" onClick={handleButton} style={{ transform: boton ? 'rotate(90deg)' : 'rotate(0deg)' }} >|||</button>
            </div>
        </header>
    )
}
export default Header;