import { Outlet, useLocation } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';


export const Layout = () => {

      const paginaCurrent = useLocation();

      const paginaHome = '/' === paginaCurrent.pathname;

    return (
        <>
        { !paginaHome &&  <Header /> }
        
        <Outlet />

        <Footer />
        </>
    )
}