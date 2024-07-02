import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from './Colors'
export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `white; border-radius: 30px; background-color: ${colors.primary};`}
`
