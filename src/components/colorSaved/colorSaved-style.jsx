import styled from 'styled-components';
export const ColorSavedContainer=styled.div`
    width:90%;
    margin:auto;
    margin-top:43px;
    padding-bottom:43px;
    @media(min-width:920px){
        margin-top:117px;
        padding-bottom:117px;
    }
`;
export const ColorSavedTitle=styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
`;
export const Element=styled.div`
    display:grid;
    grid-template-columns:repeat(1,1fr);
    gap:17px;
    @media(min-width:600px){
        grid-template-columns:repeat(2,1fr);
        gap:53px;
    }
    @media(min-width:920px){
        grid-template-columns:repeat(3,1fr);
        gap:53px;
    }
`;
export const ElementTop=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
export const Name=styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;
export const ElementBottom=styled.div`
    background-color:#151515;
    border-radius:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    padding:12px 0;
`;
export const ElementsDivs=styled.div`
    width:42px;
    height:42px;
    border:3px solid #FFFFFF;
    border-radius:50%;
    background-color:${({color})=>color};
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.15);
`;
export const BotonTrash=styled.button`
    background-color:transparent;
    &:hover{
        cursor:pointer;
    }
`;