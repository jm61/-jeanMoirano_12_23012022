import styled from 'styled-components'
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts'
import {sessionAverageDate} from '../../utils/DataFormat'
import PropTypes from 'prop-types'

/**
 * styled-components CSS embedded
 */ 
const Container = styled.div`
 grid-area: 3 / 1 / 5 / 2;
 background: ${({theme}) => theme.colors.primary};
 border-radius: 5px;
 width: 100%;
 position: relative;
 padding: 0.625rem;
`
const TooltipLabel = styled.label`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  height: 1.25rem;
  line-height: 0.25rem;
  padding: 0.525rem;
  width: 1.563rem;
`
const Heading = styled.h2`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  left: 0.938rem;
  opacity: 0.8;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`
const CustomTooltip = ({active, payload}) => {
    if (active && payload) {
      return <TooltipLabel>{`${payload[0].value} min`}</TooltipLabel>;
    }
    return null
  }

/**
 * Average Sessions Line Chart rendering
 * @param {array} averageData
 * @returns {JSX}
 */
  export const SessionAverage = ({averageData}) => {
    return (
      <Container>
        <Heading>Durée moyenne des sessions</Heading>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart
            data={averageData}
            margin={{top: 0, right: 8, bottom: 0, left: -53}}>
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="day"
              tickFormatter={sessionAverageDate}
              stroke="#fff"
              style={{
                fontSize: '12px',
                fontWeight: '500',
                opacity: '0.8',
              }}
            />
            <YAxis
              dataKey="sessionLength"
              axisLine={false}
              tick={false}
              domain={['dataMin -2', 'dataMax + 20']}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: '#000',
                strokeOpacity: 0.1,
                strokeWidth: '45',
              }}
            />
            <CartesianGrid
              strokeDasharray="0"
              horizontal={false}
              vertical={false}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
              style={{
                opacity: '0.7',
              }}
              activeDot={{r: 3, strokeWidth: 9, strokeOpacity: 0.3}}
            />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    )
  }

// PropTypes
SessionAverage.propTypes = {
  averageData: PropTypes.array
}