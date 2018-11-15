import React from 'react';
import { SectionContainer, ContentContainer, ArrowNav } from '../SharedComponents';
import styled from 'styled-components';
import Title from '../components/Title'

const Projects = (props) => {

  const ProjectsWrap = styled.div`
  height: 98%;
  width: 100;
  border: 2px solid black;
`;

const ArrowIconStyles = {
  height: '50px',
  width: '50px',
  cursor: 'pointer',
  color: '#E9E9E9',
  marginTop: '-10px'
}


  return (
    <SectionContainer height='400vh' mobileHeight='400vh' landscapeHeight='100vh' bgColor='#E9E9E9'>
      <ArrowNav bgColor='#1abfae'>
        <ion-icon name='arrow-round-down' style={ArrowIconStyles}></ion-icon>
      </ArrowNav>
      <ContentContainer width='80%' mobileWidth='90%' style={{height:'95%',marginTop:'-2vh'}}>
        <Title style={{color:'black', height: '2%'}}>
          <h1>Projects and Experience</h1>
        </Title>
        <ProjectsWrap>

        </ProjectsWrap>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Projects
