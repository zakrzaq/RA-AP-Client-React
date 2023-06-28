import { create } from 'zustand'

import { postClientData } from '../api'

interface ClientStore {
  script: string
  output: string[]
  getClientData: (url: string) => void
}

export const useClientStore = create<ClientStore>((set) => ({
  script: '',
  output: [],
  todos: [],

  getClientData: async (url: string) => {
    const data = await postClientData(url)
    set({ script: data.script })
    set({ output: data.output })
  }

}))

