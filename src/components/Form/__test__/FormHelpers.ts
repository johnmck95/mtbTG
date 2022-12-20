import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { errorCodes } from "../../../data/ErrorCodes";

export enum FormLabels {
    heightFeet = "Height (feet)",
    heightInches = "Height (inches)",
    heightCM = "Height (cm)",
    weightLB = "Weight (lb)",
    weightKG = "Weight (kg)",
    handling = "Handling",
    skillLevel = "Skill Level",
    reachMM = "Reach (mm)",
    reachInches = "Reach (inches)",
    stackMM = "Stack (mm)",
    stackInches = "Stack (inches)",
    bikeType = "Bike Type",
};

export class FormElements {
    static get heightFeet(): HTMLElement {
        return screen.getByLabelText(FormLabels.heightFeet);
    };
    static get heightInches(): HTMLElement {
        return screen.getByLabelText(FormLabels.heightInches);
    };
    static get heightCM(): HTMLElement {
        return screen.getByLabelText(FormLabels.heightCM);
    };
    static get weightLB(): HTMLElement {
        return screen.getByLabelText(FormLabels.weightLB);
    };
    static get weightKG(): HTMLElement {
        return screen.getByLabelText(FormLabels.weightKG);
    };
    static get handling(): HTMLElement {
        return screen.getByLabelText(FormLabels.handling);
    };
    static get skillLevel(): HTMLElement {
        return screen.getByLabelText(FormLabels.skillLevel);
    };
    static get skillSliderHandle(): HTMLElement {
        return screen.getByRole("slider");
    };
    static get reachMM(): HTMLElement {
        return screen.getByLabelText(FormLabels.reachMM);
    };
    static get reachInches(): HTMLElement {
        return screen.getByLabelText(FormLabels.reachInches);
    };
    static get stackMM(): HTMLElement {
        return screen.getByLabelText(FormLabels.stackMM);
    };
    static get stackInches(): HTMLElement {
        return screen.getByLabelText(FormLabels.stackInches);
    };
    static get bikeType(): HTMLElement {
        return screen.getByLabelText(FormLabels.bikeType);
    };
    static getCustomRadio(displayText: string): HTMLElement {
        return screen.getByText(displayText);
    };
};

export function enterHeightFeetValue(text: string): void {
    user.type(FormElements.heightFeet, text);
};

export function enterHeightInchesValue(text: string): void {
    user.type(FormElements.heightInches, text);
};

export function enterHeightCMValue(text: string): void {
    user.type(FormElements.heightCM, text);
};

export function enterWeightLBValue(text: string): void {
    user.type(FormElements.weightLB, text);
};

export function enterWeightKGValue(text: string): void {
    user.type(FormElements.weightKG, text);
};

export function clickHandlingRadio(radio: ("Stable" | "Neutral" | "Agile")): void {
    user.click(screen.getByText(radio));
};

type SkillSliderValues = "1" | "2" | "3" | "4" | "5" | "6";
export function slideSkillLevelHandle(skillLevel: SkillSliderValues): void {
    const handle = FormElements.skillSliderHandle;
    user.click(handle);
    handle?.setAttribute("aria-valuenow", skillLevel);
};

export function enterReachMMValue(text: string): void {
    user.type(FormElements.reachMM, text);
};

export function enterReachInchesValue(text: string): void {
    user.type(FormElements.reachInches, text);
};

export function enterStackMMValue(text: string): void {
    user.type(FormElements.stackMM, text);
};

export function enterStackInchesValue(text: string): void {
    user.type(FormElements.stackInches, text);
};

export function clickBikeTypeRadio(radio: ("Enduro" | "Trail")): void {
    user.click(screen.getByText(radio));
};

export function clickCalculateButton(): void {
    user.click(screen.getByRole("button", {name: "Calculate"}));
};

export function expectErrorMessagesToBePresent(errorIDs: number[]){
    for (const id of errorIDs)
        expectErrorMessageToBePresent(id);
};

export function expectErrorMessagesNotToBePresent(errorIDs: number[]){
    for (const id of errorIDs)
        expectErrorMessageNotToBePresent(id);
};

export function expectErrorMessageToBePresent(errorID: number): void {
    expect(isErrorMessageDisplayed(errorID)).toBeTruthy();
};

export function expectErrorMessageNotToBePresent(errorID: number): void {
    expect(isErrorMessageDisplayed(errorID)).toBeFalsy();
};

export function isErrorMessageDisplayed(errorID: number): boolean {
    if (screen.queryByText(errorCodes[errorID].errorMessage))
        return true;
    return false;
};

export function toggleRiderUnits(): void {
    user.click(screen.getByTestId("imperialRiderButton"));
};

export function toggleBikeUnits(): void {
    user.click(screen.getByTestId("imperialBikeButton"));
};

export function clickEditFormButton(): void {
    user.click(screen.getByRole('button', {name: 'Edit'}));
};

export function expectHeightFeetValueToBe(val: string): void {
    expect(FormElements.heightFeet.getAttribute("value")).toEqual(val);
}
