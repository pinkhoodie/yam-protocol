import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  background-color: ${props => props.theme.color.grey[200]};
  font-size: 56px;
  height: 100px;
  width: 100px;
  border-radius: 40px;
  align-items: center;
  text-shadow: 6px 6px 12px ${props => props.theme.color.grey[100]}, -6px -6px 12px ${props => props.theme.color.grey[300]}ee;
  display: flex;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing[3]}px;
`

// box-shadow: inset 4px 4px 8px ${props => props.theme.color.grey[300]}, inset -6px -6px 12px ${props => props.theme.color.grey[100]};

export default CardIcon
