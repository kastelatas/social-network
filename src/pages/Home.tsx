import React, {useEffect} from 'react';
import logging from "../config/logging";

const Home = (props: { name: string; }) => {

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      Home
    </div>
  );
};

export default Home;