import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  margin-left: 10px;
  width: 80px;
  color: black;
  border-radius: 5px;
  text-shadow: 0 0 20px #7f00ff,
             0 0 30px #9831ff,
             0 0 40px #ac59ff;  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;
  :hover{
    background-color: #5ff0d0;
    cursor: pointer;
    box-shadow: #5ff0d0 0px 0px 50px;
    transition-duration: 250ms;
  }
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