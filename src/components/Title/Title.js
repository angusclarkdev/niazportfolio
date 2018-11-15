import React from 'react';
import styled from 'styled-components';

const MyTitle = styled.div`
  height: 5%;
  width: 100%;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120%;
  font-family: 'Montserrat', sans-serif;
  color: white;

  {/* DESKTOP */}
  @media (min-width: 700px) {
    font-size: 200%;
  }
`;

const Title = (props) => {

  return (
    <MyTitle>
      {props.children}
    </MyTitle>
  )
}

export default Title;
