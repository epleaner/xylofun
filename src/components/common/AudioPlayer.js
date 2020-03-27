import React from 'react';
import Audio from 'react-audioplayer';

export default ({src}) => {
  return (
    <Audio width={300} autoPlay={false} playlist={[{name: '', src: src}]} />
  );
};
