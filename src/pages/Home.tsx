import React, {useEffect} from 'react';
import logging from "../config/logging";
import BaseLayout from "../layouts/BaseLayout";
import LeftSideBar from "../components/LeftSideBar";

const Home = (props: { name: string; }) => {

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <BaseLayout>
     <div className="home">
       <div className="container">
         <div className="row">
           <LeftSideBar/>
           <div className="profile">
             <div className="profile_header">
             </div>
             <div className="profile_content"></div>
           </div>
         </div>
       </div>
     </div>
    </BaseLayout>
  );
};

export default Home;

