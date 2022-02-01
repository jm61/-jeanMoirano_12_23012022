import styled from 'styled-components'
import {Layout} from '../components/Layout'
import {useUserData} from '../hooks/useUserData'
import {Error404} from './Error404'
import {useParams} from 'react-router-dom'
import {KeyData} from '../components/Analytics/KeyData'
import {DailyScore} from '../components/Analytics/DailyScore'
import {DailyActivity} from '../components/Analytics/DailyActivity'
import {SessionAverage} from '../components/Analytics/SessionAverage'
import {RadarChartPerformance} from '../components/Analytics/RadarChart'

/**
 * styled-components CSS embedded
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
  border: 2px dotted purple;
`
const AnalyticsGraphics = styled.div`
  grid-area: 1 / 1 / 5 / 4;
  display: grid;
  gap: 1.5rem;
`
const Datas = styled.div`
  grid-area: 3 / 1 / 5 / 4;
  display: flex;
  grid-column-gap: 1.5rem;
`

/**
 * Dashboard Header Rendering
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
 * User Analytics Rendering
 * @param {object} user
 * @returns {JSX}
 */
 const UserStats = ({keyData, score, activity, average, performance}) => {
  return (
    <Analytics>
      <AnalyticsGraphics>
      <DailyActivity activityData={activity} />
      <Datas>
        <SessionAverage averageData={average} />
        <RadarChartPerformance performanceData={performance} />
        <DailyScore score={score} />
      </Datas>
      </AnalyticsGraphics>
      <KeyData keyData={keyData} />
    </Analytics>
  )
}

/**
 * Whole container with Analytics rendering
 * @returns {JSX}
 */
export const Dashboard = () => {
  const {userId} = useParams()
  const {loading, user, activity, average, performance} = useUserData(userId)

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
            average = {average}
            performance = {performance}
            keyData = {user.keyData}
            score = {user.todayScore} 
          />
        </Contents>
      </Layout>
    </>
  )
}
