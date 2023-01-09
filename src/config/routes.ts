import IRoute from "../types/IRoute";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
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
    path: '/chat',
    name: "Chat Page",
    component: Chat,
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