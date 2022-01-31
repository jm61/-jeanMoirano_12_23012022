import styled from 'styled-components';
import logo from '../assets/logo-sportsee.svg';
import {Link} from 'react-router-dom';
import {Layout} from '../components/Layout';

/**
 * styled-components CSS embedded
 */ 
const Contents = styled.main`
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`

const Logo = styled.img``;
const Title = styled.h1``;

/**
 * Error 404 page rendering
 * @returns {JSX}
 */
export const Error404 = () => {
  return (
    <>
      <Layout title={'SportSee'} description={'Error 404 page not found'}>
        <Contents>
          <Logo src={logo} alt="logo sportsee" />
          <Title>Ooooops, vous êtes dans une impasse !</Title>
          <Link to="/">Retournez à la page d'accueil</Link>
        </Contents>
      </Layout>
    </>
  )
}