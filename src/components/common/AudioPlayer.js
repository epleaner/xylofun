import React from 'react';
import styled from 'styled-components';

const StyledAudio = styled.audio`
  width: 300px;
`;

export default ({src}) => {
  return (
    <StyledAudio controls src={src}>
      Your browser does not support the
      <code>audio</code> element.
    </StyledAudio>
  );
};
