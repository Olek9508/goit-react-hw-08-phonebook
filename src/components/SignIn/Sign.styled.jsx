import { BsGithub } from 'react-icons/bs';
import styled from '@emotion/styled';


export const Icon = styled(BsGithub)`
  margin-left: 4px;
  margin-right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 0 0 13px 3px greenyellow;
    transform: scale(1.3);
  }
`;