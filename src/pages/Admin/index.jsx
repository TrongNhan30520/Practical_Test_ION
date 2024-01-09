import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import consumerStore from '../../store/consumerStore'


const AdminPage = () => {

    const addConsumer = consumerStore((state) => state.addConsumer)

    const [widgets, setWidgets] = useState([])
    const [widgetChoose, setWidgetChoose] = useState()

    const handleOnDrag = (e, widgetType) => {
        e.dataTransfer.setData('widgetType', JSON.stringify(widgetType))
    }

    const handleOnDrop = (e) => {
        e.preventDefault()
        const widgetType = e.dataTransfer.getData('widgetType')
        setWidgets([...widgets, widgetType])
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        addConsumer()
    }, [addConsumer, widgets])



  return (
    <div className='flex gap-6'>
        <div className='border-4 p-4'>
            <button className='widget-button' draggable onDragStart={(e)=>handleOnDrag(e, {
                id: nanoid(),
                element: 'button',
                prop: {
                    text: 'Button'
                }
            })}>
                Button
            </button>
            <div className='widget-paragraph' draggable onDragStart={(e)=>handleOnDrag(e, {
                id: nanoid(),
                element: 'paragraph',
                prop: {
                    text: 'Paragraph'
                }
            })}>
                paragraph
            </div>
        </div>
        <div className='flex flex-col gap-3 w-5/6'>
            <div className='border-4 border-black border-dashed  h-[70vh]' onDrop={handleOnDrop} onDragOver={handleDragOver}>
                {widgets.map((widget) => {

                    const widgetObject = JSON.parse(widget)
                    if(widgetObject.element === 'button')
                    {
                        return <button className='widget-button' key={widgetObject.id} onClick={(e) =>{
                            e.preventDefault()
                            setWidgetChoose(widgetObject)
                        }}>
                        {widgetObject.prop.text}
                    </button>
                    }else {
                        return <div className='widget-paragraph' key={widgetObject.id} onClick={(e) =>{
                            e.preventDefault()
                            setWidgetChoose(widgetObject)
                        }}>
                        {widgetObject.prop.text}
                    </div>
                    }
                    
                })}
            </div>
            <div className={`${widgetChoose ? '' : 'hidden'} border-4 p-2`}>
                <span>Text</span>
                <input className='rounded-md border-2 shadow-xl ml-2' type='text' />
                <div className={`${widgetChoose?.element === 'button' ? '' : 'hidden'} ml-4 inline-block`}>
                <span >Message</span>
                <input className='rounded-md border-2 shadow-xl ml-2' type='text' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPage