import styled from 'styled-components';
import {
    RadarChart,
    PolarGrid,
    ResponsiveContainer,
    PolarAngleAxis,
    Radar,
  } from 'recharts'
import {performanceCategory, reverseCategoriesOrder} from '../../utils/DataFormat'

/**
 * styled-components CSS embedded
 */
 const Container = styled.div`
 grid-area: 3 / 2 / 5 / 3;
 background: ${({theme}) => theme.colors.secondary};
 border-radius: 5px;
 width: 100%;
 position: relative;
 padding: 0.625rem;
 display: flex;
 justify-content: center;
 align-items: center;
`
/**
 * RadarChart Performance Rendering
 * @param {object} performanceData
 * @returns {JSX}
 */
 export const RadarChartPerformance = ({performanceData}) => {
    return (
      <Container>
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart
            cy="50%"
            cx="50%"
            outerRadius="60%"
            data={reverseCategoriesOrder(performanceData)}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={performanceCategory}
              stroke="#fff"
              tickLine={false}
              style={{fontSize: '12px', fontWeight: '500'}}
            />
            <Radar
              name="Performance"
              dataKey="value"
              fill="#FF0000"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Container>
    );
  };