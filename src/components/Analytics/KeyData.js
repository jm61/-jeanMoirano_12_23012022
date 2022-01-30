import styled from 'styled-components';
import calories from '../../assets/calories-icon.svg';
import proteines from '../../assets/protein-icon.svg';
import glucides from '../../assets/carbs-icon.svg';
import lipides from '../../assets/fat-icon.svg';

/**
 * CSS for the component using styled.components
 */
const ElementsWrapper = styled.div`
  grid-area: 1 / 4 / 5 / 5;
  display: grid;
  grid-row-gap: 5rem;
  border: 2px solid green;
  margin-left: 1rem;
  }
`;
const ElementCard = styled.div`
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
`;
const ElementText = styled.div`
  margin-left: 1.5rem;
`;
const ElementValue = styled.p`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-style: normal;
  font-weight: ${({theme}) => theme.fontWeight.extraBold};
  line-height: 0;
`;
const ElementCategory = styled.p`
  color: ${({theme}) => theme.colors.third};
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

/**
 * Renders the data showing calories, carbs, fats & protiens
 * @param {object} keyData
 * @returns {JSX}
 */
export const KeyData = ({keyData}) => {
  const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
  const icon = [calories, proteines, glucides, lipides];

  return (
    <ElementsWrapper>
      {categories.map((category, index) => {
        return (
          <ElementCard key={category}>
            <Image src={icon[index]} alt="icon" />
            <ElementText>
              <ElementValue>
                {Object.values(keyData)[index]}
                {index === 0 ? 'kCal' : 'g'}
              </ElementValue>
              <ElementCategory>{category}</ElementCategory>
            </ElementText>
          </ElementCard>
        );
      })}
    </ElementsWrapper>
  );
};
