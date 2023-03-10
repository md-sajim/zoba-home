import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routs } from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
function App() {
  AOS.init();

  return (
    <>
      <RouterProvider router={routs}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
