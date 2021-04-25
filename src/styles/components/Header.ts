import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 10px;

    @media (max-width: 768px) {
        margin: 0px;
    }

    .icon-bars{
        display: none;
        font-size: 30px;
        cursor: pointer;
        color: #5D6C72;

        @media (max-width: 768px) {
            display: flex;
        }
    }
`

export const ItemLeft = styled.div`
    font-size: 35px;
    display: flex;
    align-items: center;

    .icon-star{
        color: #5D6C72;
    }
    
    span{
        color: #5D6C72;
        font-size: 30px;
        margin-left: 6px;
        font-weight: 400;
        outline: 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`

export const TitleDiv = styled.div`
    display: flex;
`;

export const ItemRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 350px;

    @media (max-width: 768px) {
        margin-top: 20px;
        z-index: 0;
    }

    .icon-red{
        background-color: #FFDCD7;
        color: #E3ABA3;
        border-color: #E3ABA3;
    }
    .icon-yellow{
        background-color: #FFEEBF;
        color: #E8C468;
        border-color: #E8C468;
    }
    .icon-blue{
        background-color: #D7F0FF;
        color: #91BBD3;
        border-color: #91BBD3;
    }
    .icon-rounded{
        font-size: 25px;
        cursor: pointer;
    }

    span{
        color: #DADFE2;
    }
`