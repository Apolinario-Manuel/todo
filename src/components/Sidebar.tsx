import React, { useState } from 'react'
import { Conatainer, ProfileItem, List, ListItem, SearchItem, Input } from '../styles/components/Sidebar'
import { BiArrowToLeft } from 'react-icons/bi'
import { BiArrowToRight } from 'react-icons/bi'
import { BsInboxFill } from 'react-icons/bs'
import { FaTasks } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import Profile from './Profile'

export default function Sidebar(){
    const[click, setClick] = useState(false)

    return (
        <Conatainer clicked={(click)} >
            {
                click &&(
                    <BiArrowToRight
                        className="icon-resizeR" 
                        size={20} 
                        color="#C3CFD3" 
                        onClick={()=> setClick(!click)}
                    />
                )
            }
            <ProfileItem>
                <Profile clicked={click} />
                {
                    !click &&(
                        <BiArrowToLeft
                            className="icon-resize" 
                            size={20} 
                            color="#C3CFD3" 
                            onClick={()=> setClick(!click)}
                        />
                    )
                }
            </ProfileItem>
            <List>
                <ListItem clicked={click}>
                    <CgProfile />
                    <span> Profile </span>
                </ListItem>
                <ListItem clicked={click}>
                    <FaTasks />
                    <span> Tasks </span>
                </ListItem>
                <ListItem active clicked={click} >
                    <BsInboxFill />
                    <span> Inbox </span>
                </ListItem>
                {
                    click &&(
                        <ListItem clicked={click} >
                            <AiOutlineSearch />
                            <span> Search </span>
                        </ListItem>
                    )
                }
            </List>
            {
                !click &&(
                    <SearchItem>
                        <AiOutlineSearch className="icon-search" />
                        <Input placeholder="Search" />
                    </SearchItem>
                )
            }
        </Conatainer>
    )
}