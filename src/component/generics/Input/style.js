import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
 
  border-radius: 30px;
  transition: all 0.3s;
  outline: none;

  display: flex;
  padding:0 10px;
background: #fff;
  align-items: center;
border:${({ focus })=>focus ? '1px solid #6684F2' : '1px solid #EBEBEB'};
  box-shadow: ${({ focus }) =>
    focus &&
    '5px 8px 35px #00000026'};
`;

Container.Wrap = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 15px;
  font-weight: 650;
`;

Container.Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  transition: all 0.3s;
  color: ${({ color }) => color ? color :"#000"};
font-weight :600;
  ::placeholder {
    font-size: 14px;
    color: ${({ placeholderColor }) => placeholderColor ? placeholderColor : '#959595'};
    font-weight:600;
  }
`;
export const Icon = styled.div`
  height:32px;
  margin: ${({ margin }) => (margin ? margin : '0 5px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
