import styled from "@emotion/styled"

export const ListBox = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 3);
`;

export const ContactListText = styled.p`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-transform: capitalize;
  color: black;
  text-shadow: 0 0 20px #7f00ff,
             0 0 30px #9831ff,
             0 0 40px #ac59ff;  
  font-size: 16px;
`
;

export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  font-size: 16px;
  font-weight: bold;
  color: darkred;
  padding: 1.5rem;
  border-radius: 5px;
  border-color: transparent;
  margin-top: 25px;
  background: transparent;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 50px 15px #e04848;
  border: #e04848 0.125em solid;
text-shadow: 0 0 20px #ff0023,
             0 0 30px #f32447,
             0 0 40px #ff5993;  box-shadow: inset 0 0 0.5em 0 #e04848, 0 0 0.5em 0 #e04848;
  :hover,
:focus{
  background-color: #e04848;
  color: black;
  border-color: transparent;
transition-duration: 250ms;
}
`;