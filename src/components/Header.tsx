import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import Button from "./UI/Button";

const Header = () => {
  const userAuth: boolean = true;

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
                userAuth ? (
                  <>
                    <Button text="Log In" link href="/login"/>
                    <Button text="Sign up" link href="/signUp"/>
                  </>
                ) : <Button text="Log Out" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;