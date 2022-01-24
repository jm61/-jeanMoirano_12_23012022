import {TopBar} from './Navigation/TopBar'
import styled from 'styled-components'

/**
 * CSS for the component using styled.components
 */
const SIDE_BAR_WIDTH = '7.5rem'
const Container = styled.main`
  display: ${({isSideActive}) => (isSideActive ? 'grid' : 'block')};
  grid-template-columns: ${({isSideNavigation}) =>
    isSideNavigation ? `${SIDE_BAR_WIDTH} 1fr` : 'unset'};
`

/**
 * Rendering of a global layout architecture, present on each page
 * @param {string} title
 * @param {description} description
 * @param {boolean} isSideNavigation
 * @param {object} children
 * @returns {JSX}
 */
export const Layout = ({children, description}) => {
  return (
    <Container>
      <TopBar />
      {children}
    </Container>
    
    
  )
}


