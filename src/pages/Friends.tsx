import React from 'react';
import BaseLayout from "../layouts/BaseLayout";
import LeftSideBar from "../components/LeftSideBar";

const Friends = () => {
  return (
    <BaseLayout>
      <div className="friends">
        <div className="container">
          <div className="row">
            <LeftSideBar/>

          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Friends;