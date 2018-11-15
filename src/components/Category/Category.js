import React from 'react';
import styled from 'styled-components';

const Category = (props) => {

  const ContactIconStyles = {
    height: '65px',
    width: '65px',
    color: 'white'
  }

  const ContactCategory = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

  const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-tiems: center;
  justify-content: center;
`;

  const IconCaption = styled.div`
  color: white;
  font-size: 18px;
  margin-top: 1.5vh;

  {/* DESKTOP AND TABLET */}
  @media(min-width: 700px){
    margin-top: 3vh;
    font-size: 20px;
  }
`;

  return (
    <ContactCategory>
      <IconWrap>
        {props.isSite
          ? <a href={`https://www.${props.caption}`}> <ion-icon name={props.iconName} style={ContactIconStyles}></ion-icon></a>
          : <a href={'mailto:niaz151@gmail.com'}> <ion-icon name={props.iconName} style={ContactIconStyles}></ion-icon></a>
        }
      </IconWrap>
      <IconCaption>
        {props.caption}
      </IconCaption>
    </ContactCategory>
  )
}

export default Category
