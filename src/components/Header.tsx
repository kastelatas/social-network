import React, {useState} from 'react';
import Logo from './Logo';
import Button from "./UI/Button";
import logging from "../config/logging";

const Header = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false)

  const openLoginForm = () => {
    logging.info("OPEN LOGIN FORM")
  }

  return (
    <div className="header">
     <div className="container">
       <div className="row">
         <div className="col-6">
           <Logo/>
         </div>
         <div className="col-6">
          <div className="sign-group">
            <Button text="Log In"  onClick={openLoginForm}/>
            <Button text="Sign up"/>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Header;