import React from 'react';
import Audio from 'react-audioplayer';
import {Box} from 'rebass/styled-components';

export default ({src}) => {
  return <Audio autoPlay={false} playlist={[{name: '', src: src}]} />;
};
