import React from 'react'
import { MdStars } from 'react-icons/md'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Avatar } from '@material-ui/core';
import profile from '../assets/profile.jpeg'
import profile_1 from '../assets/profile-2.jpg'
import profile_2 from '../assets/profile-3.jpg'
import { Container,TitleDiv, ItemLeft, ItemRight } from '../styles/components/Header'
import { FaBars } from 'react-icons/fa'

export default function Header(){

    return(
        <Container >
            <ItemLeft>
                <FaBars className="icon-bars"/>
                <TitleDiv>
                    <MdStars className="icon-star" />
                    <span>Ideas</span>
                </TitleDiv>
            </ItemLeft>
            <ItemRight>
                <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp" src={profile} />
                    <Avatar alt="Travis Howard" src={profile_1} />
                    <Avatar alt="Cindy Baker" src={profile_2} />
                    <Avatar alt="P" className="icon-red" >P</Avatar>
                    <Avatar alt="A" className="icon-yellow">A</Avatar>
                    <Avatar alt="S" className="icon-blue" >S</Avatar>
                </AvatarGroup>
                <span> + 125 others </span>
                <BiDotsHorizontalRounded className="icon-rounded" />
            </ItemRight>
        </Container>
    )
}