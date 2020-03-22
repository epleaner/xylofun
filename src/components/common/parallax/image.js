import React from 'react';
import {withController} from 'react-scroll-parallax';

const Image = (props) => {
  console.log(props);
  const handleLoad = () => {
    // updates cached values after image dimensions have loaded
    props.parallaxController.update();
  };

  return <img src={props.src} onLoad={handleLoad} />;
};

export default withController(Image);
