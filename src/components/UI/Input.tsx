import React from 'react';

interface IInput {
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string;
  placeholder: string;
  value?: string;
  type?: string;
}

const Input = (props: IInput) => {
  const {callback, name, placeholder, value, type} = props

  return (
    <div className="input-text">
      <input type={type} name={name} onChange={callback} placeholder={placeholder} value={value}/>
    </div>
  );
};

export default Input;