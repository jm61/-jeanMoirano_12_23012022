import styled from 'styled-components'
import {Layout} from '../components/Layout'
import {useParams} from 'react-router-dom'
import {Error404} from '../pages/Error404';

/**
 * CSS for the component using styled.components
 */
const Header = styled.div`
  padding-bottom: 1.875;
`
const HeaderTitle = styled.h1``;
const HeaderText = styled.p`
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.sm};
`
const UserName = styled.span`
  color: ${({theme}) => theme.colors.primary};
`
const Contents = styled.div`
  min-height: 90vh;
  padding: 2.5rem;
  padding-top: 1rem;
`

/**
 * Render the header of dashboard
 * @param {string} firstname
 * @returns {JSX}
 */
const Heading = ({firstname}) => {
  return (
    <Header>
      <HeaderTitle>
        Bonjour <UserName>{firstname}</UserName>
      </HeaderTitle>
      <HeaderText>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </HeaderText>
    </Header>
  )
}


export const Dashboard = () => {
  const {userId} = useParams();
  const {loading, error} = userId

  if (error) return <Error404 />;
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Layout
        title={'Dashboard'}
        isSideNavigation
        description={'Bienvenue sur votre Dashboard'}>
        <Contents>
          <Heading firstname={userId} />

        </Contents>
      </Layout>
    </>
  )
}


