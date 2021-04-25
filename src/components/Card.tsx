import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useDrag, useDrop } from 'react-dnd'
import Avatar from '@material-ui/core/Avatar';
import { Div } from '../styles/components/Card'
import { listUpdate } from '../actions'

export default function Card({ index, indexList ,id, content, name, days, user, col }){

    let { listData } = useSelector((state: any) => state.listTasksState)
    const dispatch = useDispatch()
    const ref = useRef(null)

    const move = (from, to, fromList, toList) => {
        const dragged = listData[fromList].cards[from]

        listData[fromList].cards.splice(from, 1)
        listData[toList].cards.splice(to, 0, dragged)
    }

    const handleAddCard = (result, card) => {

        listData.map((item, index) => {
            if(item.title == result.name){
                
                let i = listData[index].cards.filter((it) =>{
                    return it.id == card.id
                })

                if(i.length == 0){

                    listData.map((col, pos) => {
                        if(col.title == card.col){
                            let el = col.cards.filter( el => el.id != card.id )
                            (`${card.col}:` , el)
                            listData[pos].cards = el
                        }
                    })

                    listData[index].cards.push(card)

                }
            }

        })
        dispatch(listUpdate(listData))
    }

    const [{isDragging} , dragRef ] = useDrag({
        type: "CARD",
        item: {index , name: '', type: '', indexList},
        end: (item, monitor) => {

            const dropResult = monitor.getDropResult();
            if(dropResult)
                handleAddCard(dropResult, {
                    id,
                    content,
                    name,
                    days,
                    user,
                    col
                })
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
    })

    const [, dropRef] = useDrop({
        accept: "CARD",
        hover(item: any, monitor){
            const draggedListIndex = item.indexList
            const targetListIndex = indexList

            const draggedIndex = item.index
            const targetIndex = index

            if(draggedIndex === targetIndex && draggedIndex == targetIndex)
                return
            
            const targetSize = ref.current.getBoundingClientRect()
            const targetCenter = (targetSize.bottom - targetSize.top) / 2

            const draggedOffset = monitor.getClientOffset()
            const draggedTop = draggedOffset.y - targetSize.top

            if(draggedIndex < targetIndex && draggedTop < targetCenter)
                return
            
            if(draggedIndex > targetIndex && draggedTop > targetCenter)
                return
            
            move(draggedIndex, targetIndex, draggedListIndex, targetListIndex)

            item.index = targetIndex
            item.indexList = targetListIndex
        }
    })

    dragRef(dropRef(ref))

    return(
        <Div ref={ref} isDragging={isDragging} >
            <div className="infoBox" >
                <h3>{ content }</h3>
                <div className="daysInfo" >
                    <Avatar src={user} alt="userImg" />
                    <span className="userName" > {name} </span>
                    <span className="userDate" > {days} days ago </span>
                </div>
            </div>
            <BiDotsHorizontalRounded className="icon-rounded" />
        </Div>
    )
}