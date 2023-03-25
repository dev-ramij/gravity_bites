import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login';
import Document from '../pages/Document/Document';
import StoreOwner from '../pages/StoreOwner/StoreOwner';
import BankDetails from '../pages/Bank/BankDetails';
import StoreDetails from '../pages/Store/StoreDetails';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import RegisterPage from '../pages/Register/Register';

const Router = () => {

  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Element />
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
        <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Login} />}></Route>
        <Route exact path={ROUTES.Register} element={<RouteWithRole Element={RegisterPage} />}></Route>
        {/* <Route exact path={ROUTES.Document} element={<RouteWithRole Element={Document} />}></Route>
        <Route exact path={ROUTES.StoreOwner} element={<RouteWithRole Element={StoreOwner} />}></Route>
        <Route exact path={ROUTES.BankDetails} element={<RouteWithRole Element={BankDetails} />}></Route>
        <Route exact path={ROUTES.StoreDetails} element={<RouteWithRole Element={StoreDetails} />}></Route> */}
      </Routes>
    </div>
  )
}

export default Router