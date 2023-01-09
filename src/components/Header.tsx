import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Logo from './Logo';
import Button from "./UI/Button";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {logout} from '../store/reducers/Auth/AuthActionCreators';

const Header = () => {
  const {user} = useAppSelector(state => state.AuthSlice)
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logout())
    history.push('/login')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link to="/">
              <Logo/>
            </Link>
          </div>
          <div className="col-6">
            <div className="sign-group">
              {
                !user.id ? (
                  <>
                    <Button text="Log In" link href="/login"/>
                    <Button text="Sign up" link href="/signUp"/>
                  </>
                ) : <Button text="Log Out" onClick={handleLogout}/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;