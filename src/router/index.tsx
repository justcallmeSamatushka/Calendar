import React, {FC, FunctionComponent, ReactElement} from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  component: ReactElement;
  exact?: boolean;

}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    exact: true,
    component: <Login />
  }
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.EVENT,
    exact: true,
    component: <Event />
  }
]