import { Nav } from "./header_nav/HeaderNav"
import { useState } from "react"
import './header_style.css';

const Header = () => {


    const [boton, setBoton] = useState(true);

    function handleButton () {
            setBoton (prev => !prev);
    }

    return (
        <header className="center">
            <div className="container-del-Header">
                <div className='logo-h'>
                    <h1><strong>J</strong>efferson Armas</h1>
                </div>
                <div className="container-Nav">
                    {/* BARRA DE NAVEGACION */}
                    <Nav boton={boton} />
                </div>
                <button className="boton_desplegable" onClick={handleButton} style={{ transform: boton ? 'rotate(90deg)' : 'rotate(0deg)' }} >|||</button>
            </div>
        </header>
    )
}
export default Header;