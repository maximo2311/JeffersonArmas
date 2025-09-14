import './homeStyle.css';

const HomePage = () => {
    return (
        <main className='center mainHome'>
            <div className="Contenedor_foto center">
                <img 
                src='./jeffersonArmas.jpg'
                alt="Retrato de Jefferson"
                />
            </div>
            <h2>Hi I’m Jefferson</h2>
            <p className='center'>Web developer and front-end developer eager to work and drink coffee.</p>
        </main>
    )
}
export default HomePage;