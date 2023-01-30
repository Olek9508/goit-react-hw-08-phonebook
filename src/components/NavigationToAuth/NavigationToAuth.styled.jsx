import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  color: black;
  text-shadow: 0 0 20px #7f00ff,
             0 0 30px #9831ff,
             0 0 40px #ac59ff;  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;
  &.active {
    color: white;
    background-color: rgb(158, 63, 176);
  }
`;

export const NavigationBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;