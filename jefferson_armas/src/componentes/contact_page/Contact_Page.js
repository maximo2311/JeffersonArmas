import { iconos_constacto } from "../../textoPage"
import './contactStyle.css'

const ContactPage = () => {
    return (
        <section className="center Direccion_columna projects_section">
            <div className="Contenedor_foto center">
                <img 
                src='./jeffersonArmas.jpg'
                alt="Retrato de Jefferson"
                />
            </div>
            <h2>contact</h2>
            <div className="center ">
                {iconos_constacto.map( info_imagenes => {
                    return (
                        <div className="contenedores_Iconos_contacto">
                            <a href={info_imagenes.url} className="center">    
                                <img
                                src={info_imagenes.direccion_icono}
                                alt={info_imagenes.alt_icono}
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default ContactPage