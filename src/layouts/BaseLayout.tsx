import React from 'react';

interface IBaseLayout {
  children: React.ReactNode
}

const BaseLayout = (props: IBaseLayout) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default BaseLayout;