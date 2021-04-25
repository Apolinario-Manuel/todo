import React, { useState, useEffect } from 'react'
import { Container } from '../styles/components/SectionTasks'
import { useSelector } from 'react-redux'
import BoxTask from './BoxTask'
import Card from './Card'


export default function SectionTasks(){
    const listTasksState = useSelector( (state: any) => state.listTasksState)

    const [items, setItems] = useState(listTasksState.listData)

    useEffect(() => {
        setItems(listTasksState.listData)
    }, [listTasksState])

    return(
        <Container>
            {
                items.map((item, index) => 
                    <BoxTask title={item.title} >
                        {
                            item.cards.map((el, pos) => 
                                <Card 
                                    key={pos}
                                    index={pos}
                                    col={item.title}
                                    indexList={index}
                                    id={el.id}
                                    content={el.content} 
                                    name = {el.name} 
                                    days={el.days} 
                                    user={el.user}
                                />
                            )
                        }
                    </BoxTask>
                )
            }
        </Container>
    )
}