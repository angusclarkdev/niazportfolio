import React from 'react';
import styled from 'styled-components'

const ContactCategoryWrap = (props) => {

  const Wrapper = styled.div`
  height: 95%;
  width: 100%;
  border: 1px solid white;
  position: absolute;
  top: 5%;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;

  {/* DESKTOP AND TABLET */}
  @media(min-width: 1030px){
    flex-direction: row;
  }
`;

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default ContactCategoryWrap
