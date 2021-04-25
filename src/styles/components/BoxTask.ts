import styled from 'styled-components'

export const Box = styled.div`
    margin: 0px 10px;
    width: 380px;
   

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px 0px;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        margin-bottom: 15px;
        color: #5D6C72;
        font-weight: 700;

        .icon-rounded{
            font-size: 23px
        }
    }

    .body{
        background-color: #EDF1F2;
        padding: 5px 10px;
        border-radius: 10px;
    }
`

export const Button = styled.button`
    background-color: #E3E9EB;
    font-weight: 600;
    color: #B9C5CA;
    margin: 13px auto;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: rgba(185, 197, 202, 0.4);
        transition: ease-in-out 0.5s ;
    }
`