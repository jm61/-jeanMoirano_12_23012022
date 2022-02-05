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
const Title = styled.h1`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.md};
  font-weight: ${({theme}) => theme.fontWeight.extraBold};
  text-shadow:  2px 3px 4px #aaa;
`
const Links = styled(Link)`
color: ${({theme}) => theme.colors.secondary};
font-size: ${({theme}) => theme.fontSize.sm};
font-weight: ${({theme}) => theme.fontWeight.bold};
padding: .5rem;
margin: .5rem;
border-radius: 5% 50% 50% 5%;
background-color: ${({theme}) => theme.colors.lightBackground};
text-decoration: none;
  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white}`;

const UsersList = styled.h2`
color: ${({theme}) => theme.colors.secondary};
margin: auto;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

/**
 * Home page rendering
 * @returns {JSX}
 */
export const Home = () => {
  return (
    <>
      <Layout
        description={"Bienvenue sur la page d'accueil de SportSee"}>
        <Contents>
          <Logo src={logo} alt="logo sportsee" />
          <Title>Vous allez transpirer avec SportSee !</Title>
          <UsersList>Liste des utilisateurs</UsersList>
          <CardWrapper>
            <Links to="/user/12">Karl</Links>
            <Links to="/user/18">Cecilia</Links>
          </CardWrapper>
        </Contents>
      </Layout>
    </>
  )
}
