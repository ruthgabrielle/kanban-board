import styled from 'styled-components';

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;

export const Button = styled.button`
      height: 40px;
      width: 15rem;
      background: transparent;
      border-radius: 8px;
      margin-right: 5px;
      text-align: start;
      padding-left: 5px;
      border: 0;
      font-size: 400;
      cursor: pointer;
`