import React from 'react'

export default function DropArea({onDrop, onDragOver,children}) {
  return (
    <div onDrop={onDrop} onDragOver={onDragOver} className='flex flex-col items-center  border-4 border-black h-[60vh] 
      border-dashed rounded-lg overflow-auto'
    >
      {children}
    </div>
  )
}
