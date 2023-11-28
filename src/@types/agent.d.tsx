export interface DataItem {
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
}
