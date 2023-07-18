import styled from 'styled-components'
import Logo from '../../assets/img/signUpLogo.png'
export const Contaier = styled.div`
width:100%;
height:661px;
display: flex;
justify-content: center;
background: transparent linear-gradient(57deg, #BFBFBF 0%, #F1DEFF26 100%) 0% 0% no-repeat padding-box;
`;

Contaier.Wrap = styled.div`
width:100%;
max-width:770px;
display: flex;
justify-content: flex-end;

`;

Contaier.Img = styled.div`
width: 700px;
    height: 550px;
background-image: url(${Logo});
background-position: center;
background-size: cover;
position: absolute;
    left: 46px
`;

Contaier.Column = styled.div`
width: 400px;
display:flex;
flex-direction: column;
gap:20px;
align-items: center;
margin: 115px 0 0 0;
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