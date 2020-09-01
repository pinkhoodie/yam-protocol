import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
)

const StyledCard = styled.div`
  background: ${props => props.theme.color.grey[200]};
  border: 1px solid ${props => props.theme.color.grey[300]}00;
  border-radius: 12px;
  box-shadow: 4px 4px 8px ${props => props.theme.color.grey[300]}38,
    -8px -8px 16px ${props => props.theme.color.grey[100]}6b;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
