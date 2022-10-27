
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes'
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';



function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`App ${theme}`} >

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
