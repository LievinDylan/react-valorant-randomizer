import { create } from 'zustand';
import { DataItem } from '../@types/agent.d';

type State = {
  data: DataItem;
  fetchData: (uuid: string) => Promise<void>;
};

const useAgentStore = create<State>((set) => ({
  data: {} as State['data'],
  fetchData: async (uuid: string) => {
    try {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${uuid}`
      );
      const { data } = await response.json();
      set({ data });
    } catch (error) {
      throw new Error(error);
    }
  },
}));

export default useAgentStore;
