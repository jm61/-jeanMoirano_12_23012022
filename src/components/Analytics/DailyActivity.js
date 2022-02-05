import styled from 'styled-components'
import {dailyActDate} from '../../utils/DataFormat'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts'
import PropTypes from 'prop-types'

/**
 * styled-components CSS embedded
 */ 
  const Container = styled.div`
  grid-area: 1 / 1 / 3 / 4;
  background-color: ${({theme}) => theme.colors.lightBackground};
  border-radius: 5px;
  padding 0.5rem;
`
const Heading = styled.div`
  align-items: center;
  display: flex;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  justify-content: space-between;
  margin-bottom: 1.25rem;
`
const Title = styled.p`
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin-left: 2.188rem;
  margin-right: 2.188rem;
`
const ToolTipLabel = styled.div`
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin: 0.313rem;
  padding: 0.313rem;
`
const Caption = styled.div`
  align-items: center;
  display: flex;
  margin-right: 1.313rem;
  color: ${({theme}) => theme.colors.third};
  font-size: ${({theme}) => theme.fontSize.xs};
`
const Bullet = styled.span`
  color: ${props =>
    props.isFirstBullet
      ? props.theme.colors.black
      : props.theme.colors.primary};
  font-size: ${({theme}) => theme.fontSize.lg};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`
const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <ToolTipLabel>
        <p>{`${payload[0].value} Kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </ToolTipLabel>
    );
  }
  return null
}
/**
 * BarChart legend Activities rendering
 * @returns {JSX}
 */
const ActivityHeading = () => {
  return (
    <Heading>
      <Title>Activité quotidienne</Title>
      <Caption>
        <Bullet isFirstBullet>•</Bullet> Poids (Kg)
        <Bullet>•</Bullet> Calories brûlées (kCal)
      </Caption>
    </Heading>
  )
}

/**
 * BarChart with Weight & Calories rendering
 * @param {object} activity
 * @returns {JSX}
 */
 const ActivityCharts = ({activity}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart barGap={5} width="100%" data={activity}>
        <XAxis
          dataKey="day"
          tickFormatter={dailyActDate}
          tickLine={false}
          style={{fontSize: '14px'}}
          stroke="#9B9EAC"
          strokeDasharray="0"
        />
        <YAxis
          yAxisId="poids"
          stroke="#9B9EAC"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickCount="3"
          type="number"
          domain={['dataMin -3', 'auto']}
          style={{fontSize: '14px'}}
        />
        <YAxis
          yAxisId="calories"
          tick={false}
          orientation="left"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          dy={4}
          content={<CustomTooltip />}
          cursor={{fill: 'rgba(196, 196, 196, 0.5)'}}
        />
        <CartesianGrid stroke="#DEDEDE" strokeDasharray="3" vertical={false} />
        <Bar
          yAxisId="poids"
          name="kg"
          dataKey="kilogram"
          fill="#000"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          name="kCal"
          dataKey="calories"
          fill="#f00"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

/**
 * Daily activity rendering
 * @param {object} activityData
 * @returns {JSX}
 */
export const DailyActivity = ({activityData}) => {
  return (
    <Container>
      <ActivityHeading />
      <ActivityCharts activity={activityData} />
    </Container>
  )
}

// PropTypes
ActivityCharts.propTypes = {
  activity: PropTypes.array
}
