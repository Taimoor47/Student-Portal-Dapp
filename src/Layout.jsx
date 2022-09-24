
import './App.css';
import Navbar from './components/Navbar';
import { Outlet,  } from 'react-router-dom';



function Layout() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <header className="App-header">
      

        <Outlet/>


    
      </header>
    </div>
   
    </>
    
  );
}

export default Layout;
