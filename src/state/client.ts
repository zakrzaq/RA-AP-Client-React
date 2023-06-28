import { create } from 'zustand';

import { postClientData } from '../api';

interface ClientStore {
  script: string;
  output: string[];
  loading: boolean;
  error: string | null;
  resetClientData: () => void;
  getClientData: (url: string) => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  script: '',
  output: [],
  loading: false,
  error: null,

  resetClientData: () =>
    set({ script: '', output: [], loading: false, error: null }),
  getClientData: async (url: string) => {
    set({ loading: true });
    set({ script: '' });
    set({ output: [] });
    try {
      const { script, output } = await postClientData(url);
      set({ script: script });
      set({ output: output });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
}));
