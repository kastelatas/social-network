import React from 'react';
import Header from "../components/Header";

interface IBaseLayout {
  children: React.ReactNode
}

const BaseLayout = (props: IBaseLayout) => {
  const {children} = props
  return (
    <div className="base-layout">
      <Header/>
      {children}
    </div>
  );
};

export default BaseLayout;