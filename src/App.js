import logo from './logo.svg';
import './App.css';
import Navber from './Component/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/Share/NotFound/NotFound';
import Login from './Component/Authentication/Login/Login';
import Resister from './Component/Authentication/Resister/Resister';
import Footer from './Component/Footer/Footer';
import Purchase from './Component/Purchase/Purchase';
import RequireAuth from './Component/Share/RequireAuth/RequireAuth';
import Deshboard from './Component/Deshboard/Deshboard';
import MyOrders from './Component/Deshboard/MyOrders/MyOrders';
import AddReview from './Component/Deshboard/AddReview/AddReview';
import MyProfile from './Component/Deshboard/MyProfile/MyProfile';
import Alluser from './Component/Deshboard/Alluser/Alluser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Component/Share/RequireAuth/RequireAdmin';
import Payment from './Component/Deshboard/Payment/Payment';
import Edit from './Component/Deshboard/MyProfile/Edit/Edit';
import AddProduct from './Component/Deshboard/AddProduct/AddProduct';
import Fortfolio from './Component/Fortfolio/Fortfolio';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/edit' element={<Edit></Edit>}></Route>
        <Route path='/fortfolio' element={<Fortfolio></Fortfolio>}></Route>

        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/deshboard' element={
          <RequireAuth>
            <Deshboard></Deshboard>
          </RequireAuth>
        }>

          <Route path='addreviews' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='alluser' element={<RequireAdmin>
            <Alluser></Alluser>
          </RequireAdmin>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />



    </div>
  );
}

export default App;
