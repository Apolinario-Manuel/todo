import styled from 'styled-components'

interface sideProps{
    clicked?: boolean,
    active?: boolean
}

export const Conatainer = styled.div`
    width: ${(props:sideProps) => props.clicked ? "70px": "280px"};
    background-color: #E6EDEE;
    padding: 15px;
    opacity: 1;
    font-size: ${(props:sideProps) => props.clicked ? "20px": "16px"};
    transition: all 1s ease-in-out;
    

    span{
        display: ${(props:sideProps) => props.clicked ? "none": "visible"};
    }

    @media (max-width: 768px) {
        display: none;
    }

    .icon-resizeR{
        margin-top: -20px;
        margin-left: 30px;
        &:hover{
            cursor: pointer;
            background-color: #E1E9EA;
            color: #5D6C72;
        }
    }
`

export const ProfileItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .icon-resize{
        &:hover{
            cursor: pointer;
            background-color: #E1E9EA;
            color: #5D6C72;
        }
    }
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-top: 7px;
`

export const ListItem = styled.li`
    margin: ${(props:sideProps) => props.clicked ? "7px 0px": "7px 10px"};
    padding: 8px;
    height: 26px;
    color: #5D6C72;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props: sideProps) => props.active ? '#DEE6E7' : 'transparent'};

    span{
        margin-left: 10px;
    }

    &:hover{
        cursor: pointer;
        background-color: #E1E9EA;
    }

`
export const SearchItem = styled.div`
    width: 100;

    .icon-search{
        position: absolute;
        top: 204px;
        left: 32px;
        color: #5D6C72;
        font-size: 16px;
    }
`

export const Input = styled.input`
    margin: 7px 10px;
    padding: 10px 0px 10px 30px;
    height: 26px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
`