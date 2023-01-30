import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from '../../redux/authentication/operations';
import { useAuth } from '../../hooks/useAuth';
import { HeaderBox, UserTitle, UserMenuTitle } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();

  return (
    <>
      <UserMenuTitle>Phonebook</UserMenuTitle>
      <HeaderBox>
        <UserTitle>{email}</UserTitle>
        <Button variant="outlined" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </HeaderBox>
    </>
  );
};

