import styled from 'styled-components'
import {Layout} from '../components/Layout'
import {useUserData} from '../hooks/useUserData'
import {Error404} from './Error404'
import {useParams} from 'react-router-dom'
import {KeyData} from '../components/Analytics/KeyData'
import {DailyScore} from '../components/Analytics/DailyScore'
import {DailyActivity} from '../components/Analytics/DailyActivity'

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
const Analytics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
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
 * Renders the Statistics of a user
 * @param {object} user
 * @returns {JSX}
 */
 const UserStats = ({keyData, score, activity}) => {
  return (
    <Analytics>
      <DailyActivity activityData={activity} />
      <DailyScore score={score} />
      <KeyData keyData={keyData} />
    </Analytics>
  );
};

/**
 * Renders the Dashboard of a user with all their stats
 * @returns {JSX}
 */
export const Dashboard = () => {
  const {userId} = useParams()
  const {loading, user, activity} = useUserData(userId)

  if (user === undefined) return <Error404 />
  if (loading) return <p>Loading...</p>
  return (
    <>
      <Layout
        title={'Dashboard'}
        isSideActive
        description = {'Bienvenue sur votre Dashboard'}>
        <Contents>
          <Heading 
            firstname = {user.userInfos.firstName} />
          <UserStats
            activity = {activity}
            keyData = {user.keyData}
            score = {user.todayScore} 
          />
        </Contents>
      </Layout>
    </>
  )
}
