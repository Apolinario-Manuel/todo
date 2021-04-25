import React from 'react'
import {Container, Image } from '../styles/components/Profile'
import photo from '../assets/profile.jpeg'
import { Avatar, CircularProgress } from '@material-ui/core'

interface profileProps{
    clicked: boolean
}

export default function Profile(props: profileProps){

    return (
        <Container clicked={props.clicked} >
            <Image>
                <CircularProgress style={{width: 50, height: 50, color: '#00B38A'}} variant="determinate" value={-50} />
                <Avatar alt="profile" id="avatar" src={photo} />
            </Image>
            <div id="infoUser" >
                <h3> Apolinário Manuel </h3>
                <h6> Front-End </h6>
            </div>
        </Container>
    )
}

