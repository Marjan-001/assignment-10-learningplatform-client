
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes'



function App() {
  return (
    <div >

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
