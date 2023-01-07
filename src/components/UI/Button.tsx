import React from 'react';
import classNames from "classnames";

interface IButton {
  text: string;
  onClick?: () => void;
  icon?: boolean;
}


const Button = (props : IButton) => {
  const { text, onClick, icon } = props;

  const classes = classNames("btn", {
    btn_icon: icon
  })

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;