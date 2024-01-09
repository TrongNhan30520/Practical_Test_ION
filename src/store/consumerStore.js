import { create } from 'zustand'

const consumerStore = create((set) => ({
  consumer: {},
  addConsumer: (newConsumer) => set({ consumer: newConsumer }),
}))

export default consumerStore