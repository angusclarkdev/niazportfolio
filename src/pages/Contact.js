import React from 'react';
import { SectionContainer, ContentContainer, ArrowNav } from '../SharedComponents';
import Category from '../components/Category'
import Title from '../components/Title'
import ContactCategoryWrap from '../components/ContentCategoryWrap'

const Contact = (props) => {

  const ArrowIconStyles = {
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    color: '#22232A',
    marginTop: '-10px'
  }

  return (
    <SectionContainer height='0vh' mobileHeight='100vh' landscapeHeight='100vh' bgColor='#22232A'>
      <ArrowNav  bgColor='#1abfae'>
        <ion-icon name='arrow-round-down' style={ArrowIconStyles}></ion-icon>
      </ArrowNav>
      <ContentContainer width='80%' mobileWidth='90%'>
        <Title>
          <h1>Get In Contact</h1>
        </Title>
        <ContactCategoryWrap>
          <Category iconName='logo-google' caption='niaz151@gmail.com' isSite={false} />
          <Category iconName='logo-linkedin' caption='linkedin.com/in/nahmed151' isSite={true} />
          <Category iconName='logo-github' caption='github.com/niaz151' isSite={true} />
        </ContactCategoryWrap>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Contact;
