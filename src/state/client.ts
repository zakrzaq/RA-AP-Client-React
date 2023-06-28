import { create } from 'zustand';

import { postClientData } from '../api';

interface ClientStore {
  script: string;
  output: string[];
  loading: boolean;
  error: string | null;
  getClientData: (url: string) => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  script: '',
  output: [],
  loading: false,
  error: null,

  resetClientData: () => set({ script: '', output: [] }),
  getClientData: async (url: string) => {
    set({ laoding: true });
    try {
      const data = await postClientData(url);
      set({ script: data.script });
      set({ output: data.output });
    } catch (e) {
        set({ error: e.message });
    } finally {
      set({ laoding: false });
    }
  },
}));
