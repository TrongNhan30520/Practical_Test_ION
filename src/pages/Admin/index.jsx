import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import consumerStore from '../../store/consumerStore'

import DropArea from '../../components/DropArea'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'


const AdminPage = () => {
    
    //declare global state
    const consumer = consumerStore((state) => state.consumer)
    const addConsumer = consumerStore((state) => state.addConsumer)
    const clearConsumer = consumerStore((state) => state.clearConsumer)

    //save selected element
    const [widgetChoose, setWidgetChoose] = useState()

    const handleOnDrag = (e, widgetType) => {
        e.dataTransfer.setData('widgetType', JSON.stringify(widgetType))
    }

    const handleOnDrop = (e) => {
        e.preventDefault()
        const widgetType = e.dataTransfer.getData('widgetType')
        addConsumer([ ...consumer ,JSON.parse(widgetType)])
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

  return (
    <div className='flex gap-6'>
        <div className='flex flex-col gap-4 w-40'>
            <div className='border-4 p-4 h-96 rounded-lg'>
                <Button onDragStart={(e)=>handleOnDrag(e, {
                    id: nanoid(),
                    element: 'button',
                    prop: {
                        text: 'Button'
                    }
                })}>
                    Button
                </Button>
                <Paragraph onDragStart={(e)=>handleOnDrag(e, {
                    id: nanoid(),
                    element: 'paragraph',
                    prop: {
                        text: 'Paragraph'
                    }
                })}>
                    Paragraph
                </Paragraph>
            </div>
            <button className='w-full h-12 rounded-lg border-2 bg-red-500 text-white  hover:border-red-600 hover:bg-white hover:text-red-500' 
                onClick={()=>{
                    setWidgetChoose()
                    clearConsumer()
                }}
            >
                Reset
            </button>
        </div>
        <div className='flex flex-col gap-3 w-full '>
            <DropArea onDrop={handleOnDrop} onDragOver={handleDragOver}>
               
                    {consumer && consumer.map((widget, index) => {
                        if(widget.element === 'button')
                        {
                            return <Button key={widget.id}  onClick={() =>{
                                        setWidgetChoose(widget)
                                    }}
                                >
                                    {widget.prop.text}
                                </Button>
                        }else {
                            return <Paragraph key={widget.id}  onClick={() =>{
                                setWidgetChoose(widget)
                            }}>
                            {widget.prop.text}
                            </Paragraph>
                        }
                    })}
            </DropArea>
            {widgetChoose && <div className={`h-[20vh] border-4 p-2 rounded-lg`}>
                <span>Text</span>
                <input className='rounded-md border-2 shadow-xl ml-2' type='text' autoFocus value={widgetChoose?.prop.text} 
                    onChange={(e)=>{
                        e.preventDefault()
                        const text = e.target.value
                        const newConsumer = consumer.map((item) => {
                            if (item.id === widgetChoose.id) {
                                item.prop.text = text
                                return item
                            } else return item
                        })
                        addConsumer(newConsumer)
                    }}
                 />
                <div className={`${widgetChoose?.element === 'button' ? '' : 'hidden'} ml-4 inline-block`}>
                <span >Message</span>
                <input className='rounded-md border-2 shadow-xl ml-2' type='text' value={widgetChoose?.prop?.message || ''} 
                    onChange={(e)=>{
                        e.preventDefault()
                        const text = e.target.value
                        const newConsumer = consumer.map((item) => {
                            if (item.id === widgetChoose.id) {
                                item.prop.message = text
                                return item
                            } else return item
                        })
                        addConsumer(newConsumer)
                    }} 
                />
                </div>
            </div>}
        </div>
    </div>
  )
}

export default AdminPage