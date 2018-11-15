import React from 'react';
import { SectionContainer, ContentContainer, ArrowNav } from '../SharedComponents';
import Title from '../components/Title'

const Interests = (props) => {
  const ArrowIconStyles = {
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    color: '#1abfae',
    marginTop: '-10px'
  }

  return (
    <SectionContainer height='100vh' mobileHeight='100vh' landscapeHeight='200vh' bgColor='#1abfae'>
      <ArrowNav bgColor='#E9E9E9'>
        <ion-icon name='arrow-round-down' style={ArrowIconStyles}></ion-icon>
      </ArrowNav>
      <ContentContainer width='80%' mobileWidth='90%'>
        <Title>
          <h1>My Hobbies and Interests</h1> 
        </Title>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Interests;
