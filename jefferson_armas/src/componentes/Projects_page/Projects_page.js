import { informacion_projects } from "../../textoPage"
import './projectStyle.css'

const ProjectsPage = () => {
    return (
        <section className="center projects_section">
            <h2>Projects</h2>
            <article className="margin">
                {informacion_projects.map( datos => {
                    const grupo_iconos = datos.contenido_Proyecto.tecnologias
                    return (
                        <div className="center Direccion_columna contenedor_proyect">
                            <h3>{datos.nombre_Proyecto}</h3>
                            <div className="center Direccion_columna contenedor_fondo">
                                <div className="center contenedor_alineacion">
                                    <div className="contenedor_datos center">
                                        <h4>description</h4>
                                        <p>{datos.contenido_Proyecto.desccripcion}</p>
                                    </div>
                                    <div className="contenedor_datos center linea_divisora">
                                        <h4>tecnologies</h4>
                                        <div className="center contenedor_contenedores_iconos">
                                            {grupo_iconos.map( iconos => {
                                                return (
                                                    <div className="contenedores_iconos">
                                                        <img
                                                        src= {iconos.direccion_icono}
                                                        alt={iconos.alt_icono}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="contenedor_direccion center">
                                    <p>Look the project </p>
                                    <a href={datos.contenido_Proyecto.direccion_repositorio_proyecto}>here</a>
                                </div>
                            </div>
                        </div>
                    )
                } )}
            </article>
        </section>
    )
}

export default ProjectsPage