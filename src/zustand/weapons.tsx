import { create } from 'zustand';
import { WeaponItem } from '../@types/weapon.d';

type State = {
  data: WeaponItem[];
  fetchData: () => Promise<void>;
};

const useWeaponsStore = create<State>((set) => ({
  data: [] as State['data'] | [],
  fetchData: async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/weapons');
      const { data } = await response.json();
      set({ data });
    } catch (error) {
      throw new Error(error);
    }
  },
}));

export default useWeaponsStore;
