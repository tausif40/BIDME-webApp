import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import Banner from './components/HomePageBanner/Banner';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Admin from './components/AdminPanel/Home/Admin';
import ManageUsers from './components/AdminPanel/ManageUsers/ManageUsers';
import AddCategory from './components/AdminPanel/AddCategory/AddCategory';
import AddSubCategory from './components/AdminPanel/AddSubCategory/AddSubCategory';
import EditProfile from './components/EditProfile/EditProfile';
import ChangePsd from './components/changePsd/ChangePsd';
import User from './components/UserComponent/User';
import ViewCategory from './components/ViewCategory/ViewCategory';
import ViewSubCategory from './components/ViewSubCategory/ViewSubCategory';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import AddProduct from './components/AddProduct/AddProduct';
import Products from './components/Product/Products';
import ProductDetails from './components/ProductDetails/productDetails';
import Bidding from './components/bidding-page/bidding';
import AuctionList from './components/AuctionList/AuctionList';

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Banner />
              <Home />
            </React.Fragment>
          }
        />
        <Route
          path="/user"
          element={
            <React.Fragment>
              <Banner />
              <User />
            </React.Fragment>
          }
        />
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/manageusers" element={<ManageUsers />} ></Route>
        <Route path="/addCategory" element={<AddCategory />} ></Route>
        <Route path="/addSubCategory" element={<AddSubCategory />} ></Route>
        <Route path="/ChangePsd" element={<ChangePsd />} ></Route>
        <Route path="/editProfile" element={<EditProfile />} ></Route>
        <Route path="/viewCategory" element={<ViewCategory />} ></Route>
        <Route path="/addProduct" element={<AddProduct />} ></Route>
        <Route path="/viewSubCategory/:catnm" element={<ViewSubCategory />} ></Route>
        <Route path="/products/:catnm/:subcatnm" element={<Products />} ></Route>
        <Route path="/productDetails/:subcatnm/:_id/:ptitle" element={<ProductDetails />} >
          <Route path="/productDetails/:subcatnm/:_id/:ptitle/auctionList" element={<AuctionList />} />
        </Route>
        <Route path="bidding/:subcatnm/:_id/:ptitle" element={<Bidding />} ></Route>

        <Route path="/auctionList" element={<AuctionList />} ></Route>
      </Routes>

      <Footer />
      <Copyright />

    </>
  );
}

export default App;
