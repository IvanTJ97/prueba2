import styled from "styled-components";
export const ColorDiv=styled.div`
        width:50px;
        height:50px;
        border-radius:50%;
        border:3px solid #FFFFFF;
        background-color:${({color})=>color};
        @media(min-width:600px){
                width:80px;
                height:80px;   
        }
`;
export const ColorUndefined=styled.img`
        width:50px;
        height:50px;
        @media(min-width:600px){
                width:80px;
                height:80px;   
        }
`;