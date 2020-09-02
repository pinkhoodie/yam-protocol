import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import farmer from '../../assets/img/fire.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={farmer} height="32" style={{ marginTop: -4 }} />
      <StyledText>YUP Fire</StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: ${props => props.theme.color.grey[600]};
  font-size: 18px;
  font-weight: 500;
  margin-left: ${props => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

export default Logo
