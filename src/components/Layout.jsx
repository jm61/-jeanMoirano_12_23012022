import {TopBar} from './Navigation/TopBar'
import {SideBar} from './Navigation/SideBar'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * styled-components CSS embedded
 */ 
const SIDE_BAR_WIDTH = '7.5rem'
const Container = styled.main`
  display: ${({isSideActive}) => (isSideActive ? 'grid' : 'block')};
  grid-template-columns: ${({isSideActive}) =>
    isSideActive ? `${SIDE_BAR_WIDTH} 1fr` : 'unset'};
`

/**
 * Layout page rendering
 * @param {string} title
 * @param {description} description
 * @param {boolean} isSideActive
 * @param {object} children
 * @returns {JSX}
 */
export const Layout = ({children, isSideActive}) => {
  return (
    <>
    <TopBar />
      {isSideActive ? (<Container isSideActive>
        <SideBar />
          {children}
          </Container>) :
          ( <Container>{children}</Container> )}
    </>
  )
}

// PropTypes
Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSideActive: PropTypes.bool
}

Layout.defaultProps = {
  title: 'SportSee'
}


