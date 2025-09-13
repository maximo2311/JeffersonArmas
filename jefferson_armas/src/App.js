import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './componentes/Layaout';
import HomePage from './componentes/home_page/Home_page';
import MePage from './componentes/about_page/MePage';
import ProjectsPage from './componentes/Projects_page/Projects_page';
import ContactPage from './componentes/contact_page/Contact_Page';
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      { <Route path='/' element={<HomePage />} />}
      
      {<Route path='/contact' element={<ContactPage />} /> }
      
      <Route path='/me' element={<MePage />} />
      
      {<Route path='/projects' element={<ProjectsPage />} />}
    </Route>
  ),
{
  basename: '/JeffersonArmas',
})

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
