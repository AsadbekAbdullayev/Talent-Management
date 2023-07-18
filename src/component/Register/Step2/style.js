import styled from 'styled-components'
export const Contaier = styled.div`
width:100%;
height:661px;
display: flex;
justify-content: center;
`;




Contaier.Column = styled.div`
width: 400px;
display:flex;
flex-direction: column;
gap:20px;
align-items: center;
margin: 30px 0 0 0;
`;
Contaier.Title = styled.div`
font-size: 34px;
color: #2F281E;
font-weight: bold;
`;

Contaier.Desc = styled.div`
font-size: 18px;
font-weight: 700;
letter-spacing: 0px;
color: #44AEB0;
cursor: pointer;
&:hover{
    text-decoration: underline;

}
`;