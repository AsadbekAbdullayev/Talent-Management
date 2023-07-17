import styled from "styled-components";

export const Wrapper = styled.div`
width:${({width})=>width ? width :'100%'};
height:${({height})=>height ? height :'48px'};
display:flex;
justify-content: center;
align-items: center;
border-radius: ${({br})=>br ? br :'30px'};
border: ${({border})=>border && border};
background-color: ${({bg})=>bg ? bg : 'inherit'};
color: ${({color})=>color ? color : '#000'};
font-size: 14px;
margin:0 0 0 10px;
padding:${({padding})=>padding && padding };
cursor:pointer;
:hover{
    opacity:0.8;
}
`;

Wrapper.Title = styled.div`
display: flex;
width:max-content;
`;