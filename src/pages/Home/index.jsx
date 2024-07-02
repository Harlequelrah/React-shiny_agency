import './App.css'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/Colors'
import { StyledLink } from '../../utils/styles/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin:30px;
  background-color: ${colors.background}
  padding:60px 90px;
  display:flex;
  max-width: 1200px;
  flex-direction: row;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`
const Illustration = styled.img`
  flex: 1;
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isfullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
