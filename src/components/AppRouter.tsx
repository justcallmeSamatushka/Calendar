import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import {IRoute, privateRoutes, publicRoutes} from "../router";
import NoMatch from "../pages/NoMatch";
import Event from "../pages/Event";


const AppRouter = () => {
  const isAuth = false;

  const privateRoute = privateRoutes.map(({ path, component }: IRoute) => {
    return <Route key={path} path={path} element={component}/>
  });

  const publicRoute = publicRoutes.map(({ path, component }: IRoute) => {
    return <Route key={path} path={path} element={component}/>
  });

  return (
    isAuth ?
      <Routes>
        { privateRoute }
        <Route
          path="*"
          element={<NoMatch/>}
        />
      </Routes>
      :
      <Routes>
        { publicRoute }
        <Route
          path="*"
          element={<NoMatch/>}
        />
      </Routes>
  );
};

export default AppRouter;
