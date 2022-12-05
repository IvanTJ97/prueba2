import styled from 'styled-components';
export const ColorPickerContainer=styled.div`
    margin-top:40px;
    @media(min-width:920px){
        margin-top:73px;
    }
`;
export const ColorDivContainer=styled.div`
    display:flex;
    flex-direction:row;
    gap:25px;
    justify-content:center;
    margin-bottom:31px;
    @media(min-width:920px){
        gap:36px;
        margin-bottom:84px;
    }
`;
export const NameInputContainer=styled.div`
    display:grid;
    place-items:center;
    flex-direction:column;
    @media(min-width:920px){
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        width:66%;
        margin:auto;
    }
`;
export const NameTitle=styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color:#FFFFFF;
    margin-top:21px;
    @media(min-width:920px){
        margin-top:0;
    }
`;
export const NameInput=styled.input`
    border:4px solid #FFFFFF;
    border-radius:9px;
    background-color:#2c2c2c;
    padding:4px 16px;
    color:#FFFFFF;
    margin-right:12px;
    &::placeholder{
        color:#FFFFFF;
    }
`;
export const PlusInput=styled.button`
    background-color:#FFFFFF;
    border-radius:9px;
    color:#2C2C2C;
    padding:5px 10px;
    display:grid;
    place-items:center;
    &:hover{
        cursor:pointer;
        background-color:#2C2C2C;
        color:#FFFFFF;
        outline:2px solid #FFFFFF;
    }
`;
export const Boton=styled.button`
    background-color:transparent;
    ${({resize})=>resize&&`
    transform:scale(1.15);
    `}
    &:hover{
        cursor:pointer;
        
    }
    @media(min-width:600px){
        ${({resize})=>resize&&`
        transform:scale(1.25);
        `}
    }
`;