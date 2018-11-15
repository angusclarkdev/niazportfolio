import styled from 'styled-components';


export const SectionContainer = styled.div`

  height:${props => props.mobileHeight};
  width:100%;

  display:flex;
  align-items:center;
  justify-content:center;

  position:relative;

  background-color: ${props => props.bgColor};

  {/* DESKTOP AND TABLET */}
  @media (min-width:700px){
    height:${props => props.height};
    min-height:850px;
  }

`;

export const ContentContainer = styled.div`

  height:80%;
  width:${props => props.mobileWidth};
  max-width:1400px;

  position:relative;
  border:1px solid blue;

  /* {DESKTOP} */
  @media (min-width:700px){
    width:${props => props.width};
  }

`;

export const ArrowNav = styled.div`

  height:60px;
  width:120px;

  background-color:${props => props.bgColor};
  border-radius:0 0 90px 90px;

  display:flex;
  align-items:center;
  justify-content:center;

  position:relative;

  position:absolute;
  top:0;

`;
