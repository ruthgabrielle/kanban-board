import styled from 'styled-components';

export const Button = styled.button`
  background-color: #5aac44;
  margin: 10px 10px 10px 0px;
  width: 120px;
  height: 30px;
  border: 0;
  border-radius: 7px;
  color: #FFFF;
  text-align: left;
  padding-left: 10px;

  &:hover{
  background-color: rgb(90, 172, 68, 0.7);
  opacity: 0.9, 0.8, 0.7;
  }
   
`
export const Paper = styled.div`
  width: 300px;
  background-color: transparent;
  padding: 10px 10px 10px 20px;
  margin: 0 0 0 0;
  background-color: transparent;

&:hover {
  background-color:  rgba(230, 236, 245, 0.4);
  opacity: 0.9, 0.8, 0.7;
}
  h3{

}
`

export const InputPaper = styled.div`
  width: 300px ;
  border: 0;
  padding-top: 20px;
`
export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 0;

  ::placeholder {
    padding-left: 10px;
  }

`

export const Select = styled.select`
  width: 300px ;
  border: 0;
  text-align: center;
  font-size: 15px;
` 
export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;


export const Container = styled.div`

`