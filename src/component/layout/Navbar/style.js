import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:120px;
display:flex;
justify-content: center;
background:${({bg})=>bg && bg};
`;

Wrapper.Wrap = styled.div`
max-width: 1100px;
width:100%;
display: flex;
justify-content:space-between;
align-items: center;
`;
Wrapper.Flex = styled.div`
display: flex;
align-items: center;
gap:20px;
`;

Wrapper.Title = styled.div`
display: flex;
width:max-content;
font-size: 14px;
transition: 0.2s;

cursor:pointer;
`;