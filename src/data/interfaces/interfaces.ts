import { ChangeEvent } from 'react';

export interface RiderConversionProps {
  heightCMCalc: number;
  heightFootCalc: number;
  heightInchesCalc: number;
  weightLBCalc: number;
  weightKGCalc: number;
}

export interface HandleRiderConversionProps {
  heightCMCalc: number;
  heightFootCalc: number;
  heightInchesCalc: number;
  weightKGCalc: number;
  weightLBCalc: number;
}

export interface HandleBikeConversionProps {
  reachMMCalc: number;
  reachInchCalc: number;
  stackMMCalc: number;
  stackInchCalc: number;
}

export interface BikeConversionProps {
  reachMMCalc: number;
  reachInchCalc: number;
  stackMMCalc: number;
  stackInchCalc: number;
}

export interface FormProps {
  inputs: {
    heightFeet: string;
    heightInches: string;
    heightCM: string;
    weightLB: string;
    weightKG: string;
    handling: string;
    skillLevel: string;
    reachInches: string;
    reachMM: string;
    stackInches: string;
    stackMM: string;
    bikeType: string;
  };
  imperialRider: boolean;
  imperialBike: boolean;
  handleImperialRider: () => void;
  handleImperialBike: () => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => void;
  handleCustomComponent: (name: string, value: string) => void;
  handleRiderConversion: ({
    heightCMCalc,
    heightFootCalc,
    heightInchesCalc,
  }: RiderConversionProps) => void;
  handleBikeConversion: ({
    reachMMCalc,
    reachInchCalc,
    stackMMCalc,
    stackInchCalc,
  }: BikeConversionProps) => void;
  handleFormCompletion: () => void;
  handleReRender: () => void;
}

export interface CustomRadioProps {
  title: string;
  name: string;
  value: string;
  isChecked: boolean;
  isError: boolean;
  handleCustomRadio: (name: string, value: string) => void;
}

export interface ErrorAlertProps {
  errorMessage: string;
}

export interface LeanMoreModalProps {
  id: number;
}

export interface Output {
  barWidthMM: string;
  barWidthInch: string;
  barRiseMM: string;
  barRiseInch: string;
  stemLengthMM: string;
  stemLengthInch: string;
  spacersMM: string;
  spacersInch: string;
  frontTirePSI: string;
  rearTirePSI: string;
  inserts: string;
}

export interface OutputProps {
  inputs: {
    heightFeet: string;
    heightInches: string;
    heightCM: string;
    weightLB: string;
    weightKG: string;
    handling: string;
    skillLevel: string;
    reachInches: string;
    reachMM: string;
    stackInches: string;
    stackMM: string;
    bikeType: string;
  };
  outputs: {
    barWidthMM: string;
    barWidthInch: string;
    barRiseMM: string;
    barRiseInch: string;
    stemLengthMM: string;
    stemLengthInch: string;
    spacersMM: string;
    spacersInch: string;
    frontTirePSI: string;
    rearTirePSI: string;
    inserts: string;
  };
  imperialRider: boolean;
  imperialBike: boolean;
  handleShowForm: () => void;
}

export interface AlgorithmProps {
  heightFeet: string;
  heightInches: string;
  heightCM: string;
  weightLB: string;
  weightKG: string;
  handling: string;
  skillLevel: string;
  reachInches: string;
  reachMM: string;
  stackInches: string;
  stackMM: string;
  bikeType: string;
}

export interface SkillSliderProps {
  skillLevel: string;
  handleChange: (name: string, value: string) => void;
}
