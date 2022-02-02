import styled from 'styled-components';
import calories from '../../assets/calories-icon.svg';
import proteines from '../../assets/protein-icon.svg';
import glucides from '../../assets/carbs-icon.svg';
import lipides from '../../assets/fat-icon.svg';
import PropTypes from 'prop-types'

/**
 * styled-components CSS embedded
 */
const Container = styled.div`
  grid-area: 1 / 4 / 5 / 5;
  display: grid;
  grid-row-gap: 4rem;
  border: 2px dashed green;
  margin-left: 1rem;
  }
`
const Card = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.colors.lightBackground};
  padding: 1.5rem;
  border-radius: 5px;
  align-items: center;
  width: 75%;
  padding-left: 1.8rem;
`;
const Image = styled.img`
  height: 4.125rem;
  width: 4.125rem;
`
const Text = styled.div`
  margin-left: 1.5rem;
`
const Value = styled.p`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-style: normal;
  font-weight: ${({theme}) => theme.fontWeight.extraBold};
  line-height: 0;
`
const Category = styled.p`
  color: ${({theme}) => theme.colors.third};
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`

/**
 * Categories by Icons rendering
 * @param {object} keyData
 * @returns {JSX}
 */
export const KeyData = ({keyData}) => {
  const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
  const icon = [calories, proteines, glucides, lipides];

  return (
    <Container>
      {categories.map((category, index) => {
        return (
          <Card key={category}>
            <Image src={icon[index]} alt="icon" />
            <Text>
              <Value>
                {Object.values(keyData)[index]}
                {index === 0 ? 'kCal' : 'g'}
              </Value>
              <Category>{category}</Category>
            </Text>
          </Card>
        )
      })}
    </Container>
  )
}

// PropTypes
KeyData.propTypes = {
  keyData: PropTypes.object
}
