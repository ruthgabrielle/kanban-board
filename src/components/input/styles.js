import styled from 'styled-components';

export const Button = styled.button`
  background-color: #59D090;
  margin: 10px 10px 10px 0px;
  width: 180px;
  height: 20px;
  border: 0;
  color: #333;
  border-radius: 15px;

  &:hover{
  background-color: rgb(89, 208, 144, 0.4);
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

export const Container = styled.div`

`