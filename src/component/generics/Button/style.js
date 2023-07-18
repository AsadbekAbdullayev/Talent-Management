import styled from "styled-components";

export const Wrapper = styled.div`
width:${({width})=>width ? width :'100%'};
height:${({height})=>height ? height :'48px'};
display:flex;
justify-content: center;
align-items: center;
border-radius: ${({br})=>br ? br :'30px'};
border: ${({border})=>border && border};
background: ${({bg})=>bg ? bg : 'inherit'};
color: ${({color})=>color ? color : '#000'};
font-size: 14px;
font-weight: 600;
padding:${({padding})=>padding && padding };
cursor:pointer;
user-select: none;
&:hover{
    opacity:0.95;
}
&:active{
    transform: scale(0.99);
}
`;

Wrapper.Title = styled.div`
display: flex;
width:max-content;
`;