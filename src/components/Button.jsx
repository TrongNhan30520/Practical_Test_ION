import React from 'react'

const Button = ({ onDragStart, onClick, children}) => {
        return (
            <button className='p-2 m-2 border-2 bg-gray-300 rounded-lg  sm:break-all' 
                draggable={onDragStart ? true : false}
                onDragStart={onDragStart}
                onClick={(e)=>{
                    e.preventDefault()
                    if(onClick)
                    {
                        onClick() 
                    }
                    
                }}
            >
                {children}
            </button>
        )
    
}

export default Button