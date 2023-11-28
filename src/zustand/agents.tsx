import { create } from 'zustand';
import { DataItem } from '../@types/agent.d';

type State = {
  data: DataItem[];
  fetchData: () => Promise<void>;
};

const useAgentsStore = create<State>((set) => ({
  data: [] as State['data'],
  fetchData: async () => {
    try {
      const response = await fetch(
        'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
      );
      const { data } = await response.json();
      set({ data });
    } catch (error) {
      throw new Error(error);
    }
  },
}));

export default useAgentsStore;
