import IRoute from "../types/IRoute";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import Friends from "../pages/Friends";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


const routes: IRoute[] = [
  {
    path: '/',
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: '/chats',
    name: "Chat Page",
    component: Chats,
    exact: true,
  },
  {
    path: '/friends',
    name: "Friends Page",
    component: Friends,
    exact: true,
  },
  {
    path: '/login',
    name: "Login Page",
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    name: "SignUp Page",
    component: SignUp,
    exact: true,
  },
]

export default routes;