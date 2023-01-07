import React from 'react';
import classNames from "classnames";
import {NavLink} from 'react-router-dom';

interface IButton {
  text: string;
  onClick?: () => void;
  icon?: boolean;
  pink?: boolean;
  link?: boolean;
  href?: string;
}


const Button = (props : IButton): any => {
  const { text, onClick, icon, pink, link, href } = props;
  const classes = classNames("btn", {
    btn_icon: icon,
    btn_pink: pink,
    btn_link: link
  })


  if (link) {
    return (
      <NavLink exact className={classes} to={href || ''} activeClassName="btn_active" >
        {text}
      </NavLink>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );


};

export default Button;