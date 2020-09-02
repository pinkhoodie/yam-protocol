import React from 'react'
import styled from 'styled-components'

interface CardTitleProps {
  text?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => (
  <StyledCardTitle>{text}</StyledCardTitle>
)

const StyledCardTitle = styled.div`
  color: ${props => props.theme.color.grey[600]};
  font-size: 18px;
  font-weight: 500;
  padding: ${props => props.theme.spacing[4]}px;
  text-align: center;
  text-shadow: 6px 6px 12px ${props => props.theme.color.grey[100]}, -6px -6px 12px ${props => props.theme.color.grey[300]}cc;
`

export default CardTitle
