import styled from 'styled-components';

export const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  /* margin: 10px; */
  padding: 10px;
  background-color: teal;
  border-radius: 5px;
`;
export const ListItem = styled.li`
  width: auto;
  height: auto;
  border-radius: 5px;

  &:nth-child(2) {
    margin: 0 10px;
  }
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  color: #0c7baf;
  &:hover {
    cursor: pointer;
    color: #074681;
  }
`;
