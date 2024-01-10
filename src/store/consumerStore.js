import { create } from 'zustand'

// custom global store for list elements of consumer
const consumerStore = create((set) => ({
  consumer: [],
  addConsumer: (newConsumer) => set({ consumer: newConsumer }),
  clearConsumer: () => set({ consumer: [] }),
}))

export default consumerStore