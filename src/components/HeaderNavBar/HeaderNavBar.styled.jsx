import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 2px solid black;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px 5px #ffffff,
            0 0 20px 7px #ebecca,
            0 0 25px 20px #8a2be2,
            0 0 30px 25px #fefefe;
`;

export const Navigation = styled.nav`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;
  &.active {
    color: white;
    background-color: rgb(158, 63, 176);
  }
`;