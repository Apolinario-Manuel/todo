import styled, { css } from 'styled-components';

interface CardProps{
    isDragging: boolean
}

export const Div = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
    padding: 20px;
    margin: 13px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #5D6C72;
    cursor: grabbing;

    &:hover{
        
        box-shadow: 0 8px 16px rgba(39, 83, 123, 0.12);
    }

    .infoBox{
        cursor: grabbing;
    }
    h3{
        font-weight: 700;
    }

    .userName{
        font-size: 16px;
        font-weight: 600;
        margin: 0px 9px;
    }
    .userDate{
        font-weight: 500;
        font-size: 12px;
        color: #DADFE2;
    }

    .daysInfo{
        margin: 10px 0px; 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .icon-rounded{
        margin: 45px 0px 0px auto;
        font-size: 20px;
    }

    ${ (props: CardProps) => props.isDragging && css`
        border: 1px solid rgba(185, 197, 202, 0.2);
        padding-top: 31px;
        background: #E1E7E9;
        box-shadow: none;
        cursor: grabbing;

        &:hover{
            box-shadow: none;
        }

        .icon-rounded,div{
            opacity: 0;
        }
    ` }
`