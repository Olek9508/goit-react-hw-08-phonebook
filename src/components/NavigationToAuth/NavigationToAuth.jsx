import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authentication/selectors';
import { Link, NavigationBox } from './NavigationToAuth.styled';

export const NavigationToAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavigationBox>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/contacts">Phonebook</Link>
      </NavigationBox>
      <NavigationBox>
        <Link to="/register">Register</Link>
        <Link to="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</Link>
      </NavigationBox>
    </>
  );
};

