import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-wrap: nowrap;
        flex-direction: column;
    }
`