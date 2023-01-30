import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Global } from '@emotion/react';
import { Loader } from '../Loader/SpinningLoader';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { NavigationToAuth } from '../NavigationToAuth/NavigationToAuth';
// import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/App.styled';
import { Header, Navigation } from './HeaderNavBar.styled';


export const HeaderNavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
      <Header>
        <Container>
          <Navigation>
            {isLoggedIn ? <UserMenu /> : <NavigationToAuth />}
          </Navigation>
        </Container>
              </Header>
              </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

