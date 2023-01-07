import React, {useEffect} from 'react';
import logging from "../config/logging";
import BaseLayout from "../layouts/BaseLayout";

const Home = (props: { name: string; }) => {

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <BaseLayout>
      Home
    </BaseLayout>
  );
};

export default Home;

