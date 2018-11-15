import React from 'react';
import {SectionContainer} from '../SharedComponents';

const Landing = () => {

  const logoStyles = {
    height: '200px',
    width: '200px'
  }

  return (
    <SectionContainer height='100vh' mobileHeight='100vh' landscapeHeight='100vh' bgColor='#22232A'>
      <img src={require('../images/logo.png')} style={logoStyles} alt='logo' />
    </SectionContainer>
  )
}

export default Landing;
