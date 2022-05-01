import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Inventory from './Pages/Inventory/Inventory';
import Allinventory from './Pages/Allinventory/Allinventory';
import Addinventory from './Pages/Addinventory/Addinventory';
import CustomerInventory from './Pages/CustomerInventory/CustomerInventory';
import RequireAuth from './RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Stores from './Pages/Stores/Stores';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Stores></Stores>
          </RequireAuth>
        } />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } />
        <Route path='/addinventory' element={<RequireAuth>
          <Addinventory></Addinventory>
        </RequireAuth>} />
        <Route path='customerinventory' element={<RequireAuth>
          <CustomerInventory></CustomerInventory>
        </RequireAuth>} />
        <Route path='/allinventory' element={<RequireAuth>
          <Allinventory></Allinventory>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blog></Blog>} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
