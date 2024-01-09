import { useEffect } from 'react';
import consumerStore from '../../store/consumerStore'

const ConsumerPage = () => {

  const consumer = consumerStore((state) => state.consumer)

  useEffect(()=>{
    
  },[consumer])

  return (
    <div>{consumer}</div>
  )
}

export default ConsumerPage