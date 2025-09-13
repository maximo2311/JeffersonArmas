import informacion_escrita from "../../textoPage.js";
import './aboutStyle.css'
import { all_iconos_for_Me } from "../../textoPage.js";
const MePage = () => {
    return (
        <section className="center Direccion_columna">
            <article className="center article_introduction margin">
                <strong className="Strong_Inicio">J</strong>
                <p className="posicion_Texto texto_introduccion">efferson is my name.<br/> Ever since I was a child, 
                    I’ve been fascinated by understanding how things work. 
                    That curiosity led me to explore the world of design and development, where I discovered that creating 
                    isn’t just about solving problems it’s also about telling stories.</p>
            </article>
            <article className="center margin Direccion_columna">
                <h3 className="posicion_titulos" >Skills and Technologies</h3>
                <div className="center contenedor_iconos">
                    {
                        all_iconos_for_Me.map ( directions => {
                            return (
                                <div className="container_cada_icono">
                                    <img
                                    src={directions.direccion}
                                    alt= {directions.alt}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className="margin">
                {informacion_escrita.map( texto => {
                    return (
                        <div className="center Direccion_columna">
                            <h3 className="posicion_titulos">{texto.titulo}</h3>
                            <p className="posicion_Texto">{texto.parrafo}</p>
                        </div>
                    )
                })}
            </article>
            <article className="margin center Direccion_columna">
                <h3 className="posicion_titulos">Certificados</h3>
                <div className="container_certificado posicion_Texto">
                    <img 
                    src="./Certificado.png"
                    alt="Certificado de Codecademy"
                    />
                </div>
            </article>
        </section>
    )
}

export default MePage;