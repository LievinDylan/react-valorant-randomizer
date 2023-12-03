export interface DataItem {
  status: number;
  backgroundGradientColors: string[];
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  fullPortrait: string;
  role: {
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
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}
