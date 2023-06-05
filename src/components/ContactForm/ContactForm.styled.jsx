import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebf0eb;
  border: 1px solid;
  border-radius: 7px;
  padding: 20px 20px 80px 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: 700;
  color: #000000;
`;

export const Input = styled(Field)`
  width: 500px;
  height: 25px;
  font-size: 26px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  &:focus {
    border: 3px solid #00fa00;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 35px;
  bottom: 20px;
  display: flex;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  background-color: #00fa00;
  svg {
    width: 40px;
    height: 40px;
    color: #ffffff;
  }
  &: hover {
    background-color: #eefa05;
  }
`;
