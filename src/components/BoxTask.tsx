import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { Box, Button } from '../styles/components/BoxTask'
import { useDrop } from 'react-dnd'

interface BoxProps{
    title: string,
    children: React.Component
}

export default function BoxTask({ title  , children, ...rest }: BoxProps){


    const[{ canDrop, isOver }, drop] = useDrop({
        accept: "CARD",
        drop: () => ({name: title}),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })

    return(
        <Box ref={drop} {...rest} >
            <header>
                <span> {title} </span>
                <BiDotsHorizontalRounded className="icon-rounded" />
            </header>
            <div className="body" >
                {children}
                <Button> + New Card </Button>
            </div>
        </Box>
    )
}