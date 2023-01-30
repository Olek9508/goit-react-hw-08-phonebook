import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Global } from '@emotion/react';
import { Loader } from '../Loader/SpinningLoader';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from '../AuthNav/AuthNav';
// import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/App.styled';
import { Header, Navigation } from './NavigationToAuth.styled';


const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
      <Header>
        <Container>
          <Navigation>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
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

export default SharedLayout;