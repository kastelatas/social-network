import React from 'react';
import BaseLayout from "../layouts/BaseLayout";
import LeftSideBar from "../components/LeftSideBar";

const Chats = () => {
  return (
    <BaseLayout>
      <div className="chats">
        <div className="container">
          <div className="row">
            <LeftSideBar/>

          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Chats;