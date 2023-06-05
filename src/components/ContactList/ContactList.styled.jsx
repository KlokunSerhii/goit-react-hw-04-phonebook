import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 20px;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
`;
export const Button = styled.button`
  display: flex;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  border: none;
  background-color: #fa0505;
  color: #c2ddf0;
  svg {
    width: 30px;
    height: 30px;
  }
  &: hover {
    background-color: #fa8c05;
  }
`;
