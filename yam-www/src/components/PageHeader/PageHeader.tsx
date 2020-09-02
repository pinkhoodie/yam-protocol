import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Spacer from '../Spacer'

interface PageHeaderProps {
  icon: React.ReactNode,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="sm">
    <StyledPageHeader>
      <StyledIcon>{icon}</StyledIcon>
      <Spacer />
      <div style={{display:"flex",flexDirection:"column"}}>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      </div>
    </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding-bottom: ${props => props.theme.spacing[6]}px;
  padding-top: ${props => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 96px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  width: 96px;
  text-shadow: -6px -6px 12px ${props => props.theme.color.grey[100]}, 6px 6px 12px ${props => props.theme.color.grey[300]}cc;
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 500;
  font-family: Bungee Shade;
  background: -webkit-linear-gradient(#e27faa, #9626ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0;
  text-shadow: -6px -6px 12px ${props => props.theme.color.grey[100]}aa, 6px 6px 12px ${props => props.theme.color.grey[300]}99;
`

const StyledSubtitle = styled.h3`
  color: ${props => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  text-shadow: -6px -6px 12px ${props => props.theme.color.grey[100]}, 6px 6px 12px ${props => props.theme.color.grey[300]}cc;
`

export default PageHeader
