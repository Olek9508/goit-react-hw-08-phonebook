import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Link, HavigationBox } from './AuthNav.styled';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <HavigationBox>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/contacts">Phonebook</Link>
      </HavigationBox>
      <HavigationBox>
        <Link to="/register">Register</Link>
        <Link to="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</Link>
      </HavigationBox>
    </>
  );
};

