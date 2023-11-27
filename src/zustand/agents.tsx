import { create } from 'zustand';

type DataItem = {
  status: number;
  backgroundGradientColors: string[];
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    developerName: string;
    displayName: string;
    description: string;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
  };
  recruitmentData: {
    counterId: string;
    milestoneId: string;
    milestoneThreshold: number;
    useLevelVpCostOverride: boolean;
    levelVpCostOverride: number;
    startDate: Date;
    endDate: Date;
  };
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
};

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
