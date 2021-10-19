import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 30px 0;
    justify-content: center;
    height: 100%;
      `

export const BoardContainer = styled.div`
    display: flex;
    padding: 30px 0;
    height: calc(100% -80px);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 42px;
      h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
      }
  }
`;

export const ListContainer = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
   p {
    font-weight: 500;
    line-height: 20px;
  }

`;

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

export const Content = styled.div`
    user-select: none;
    position: relative;
    padding: 15px;
    margin: 0 0 8px 0;
    min-height: 50px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    background-color: #FFF;
    margin-top: 30px;
    &:hover {
    background-color:  rgba(230, 236, 245, 0.4);
    opacity: 0.9, 0.8, 0.7;
    }`