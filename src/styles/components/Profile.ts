import styled from 'styled-components'

interface profileProps{
    clicked: boolean
}

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    #infoUser{
        display: ${(props: profileProps) => props.clicked ? "none": "visible"};
        transition: all .1s ease-in-out;
    }

    h3 {
        font-weight: 400;
        color: #5D6C72;
        font-size: 15px;
    }

    h6{
        font-weight: 400;
        font-size: 12px;
        color: #A2ADB0
    }
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    #avatar{
        position: absolute;
    }

`