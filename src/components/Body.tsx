import React from 'react'
import { Conatainer } from '../styles/components/Body'
import Header from './Header'
import SectionTasks from './SectionTasks'


export default function Body(){

    return (
        <Conatainer>
            <Header />
            <SectionTasks />
        </Conatainer>
    )
}