import styled from 'styled-components'
import {Layout} from '../components/Layout'
import {useUserData} from '../hooks/useUserData'
import {useParams} from 'react-router-dom'

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

/**
 * Renders the Dashboard of a user with all their stats
 * @returns {JSX}
 */
export const Dashboard = () => {
  const {userId} = useParams();
  const {loading, user} =
    useUserData(userId);

  //if (error) return <Error />;
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Layout
        title={'Dashboard'}
        isSideActive
        description={'Bienvenue sur votre Dashboard'}>
        <Contents>
          <Heading 
            firstname={user.userInfos.firstName} />
        {JSON.stringify(user.userInfos)}
        </Contents>
      </Layout>
    </>
  )
}
