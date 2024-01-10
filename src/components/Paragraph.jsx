import React from 'react'

const Paragraph = ({onDragStart, onClick,  children}) => {
  return (
    <div className='p-2 break-all text-center'  draggable={onDragStart ? true : false}
        onDragStart={onDragStart}
        onClick={(e)=>{
            e.preventDefault()
            if(onClick)
            {
                onClick()
            } 
        }}
    >{children}</div>
  )
}

export default Paragraph