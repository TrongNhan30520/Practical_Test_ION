import { useEffect } from 'react';
import consumerStore from '../../store/consumerStore'

import DropArea from '../../components/DropArea'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'

const ConsumerPage = () => {

  const consumer = consumerStore((state) => state.consumer)

  useEffect(()=>{
    
  },[consumer])

  return (
    <DropArea >
          {consumer && consumer.map((widget) => {
            if(widget.element === 'button')
            {
                return <Button key={widget.id} onClick={() =>{
                          if(widget.prop?.message)
                          {
                            alert(widget.prop.message)
                          }
                        }}
                    >
                        {widget.prop.text}
                    </Button>
            }else {
                return <Paragraph key={widget.id} >
                {widget.prop.text}
                </Paragraph>
            }
          })}
  </DropArea>
  )
}

export default ConsumerPage