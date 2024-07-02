import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import colors from '../../utils/styles/Colors'
import styled from 'styled-components'

const CardLabel = styled.span`
  font-weight: bold;
  font-size: 22px;
  color: #5843e4;
  font-size: 22px;
`
const CartTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
function Card({ label = '', title = '', picture = DefaultPicture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card
