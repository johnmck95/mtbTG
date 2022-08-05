import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";

enum FormLabels {
    heightFeet = "Height (feet)",
    heightInches = "Height (inches)",
    heightCM = "Height (cm)",
    weightLB = "Weight (lb)",
    weightKG = "Weight (kg)",
    handling = "Handling",
    skillLevel = "Skill Lvel",
    reachMM = "Reach (mm)",
    reachInches = "Reach (inches)",
    stackMM = "Stack (mm)",
    stackInches = "Stack (inches)",
    bikeType = "Bike Type",
};

export class FormElements {
    static get heightFeet(): HTMLElement {
        return screen.getByLabelText(FormLabels.heightFeet)
    };
    static get heightInches(): HTMLElement {
        return screen.getByLabelText(FormLabels.heightInches);
    }
    static get heightCM(): HTMLElement {
        return screen.getByLabelText(FormLabels.heightCM);
    }
    static get weightLB(): HTMLElement {
        return screen.getByLabelText(FormLabels.weightLB);
    }
    static get weightKG(): HTMLElement {
        return screen.getByLabelText(FormLabels.weightKG);
    }
    static get handling(): HTMLElement {
        return screen.getByLabelText(FormLabels.handling);
    }
    static get skillLevel(): HTMLElement {
        return screen.getByLabelText(FormLabels.skillLevel);
    }
    static get reachMM(): HTMLElement {
        return screen.getByLabelText(FormLabels.reachMM);
    }
    static get reachInches(): HTMLElement {
        return screen.getByLabelText(FormLabels.reachInches);
    }
    static get stackMM(): HTMLElement {
        return screen.getByLabelText(FormLabels.stackMM);
    }
    static get stackInches(): HTMLElement {
        return screen.getByLabelText(FormLabels.stackInches);
    }
    static get bikeType(): HTMLElement {
        return screen.getByLabelText(FormLabels.bikeType);
    }
};


export function enterHeightFeetValue(text: string): void {
    user.type(FormElements.heightFeet, text);
};
export function enterHeightInchesValue(text: string): void {
    user.type(FormElements.heightInches, text);
}
export function enterHeightCMValue(text: string): void {
    user.type(FormElements.heightCM, text);
}
export function enterWeightLBValue(text: string): void {
    user.type(FormElements.weightLB, text);
}
export function enterWeightKGValue(text: string): void {
    user.type(FormElements.weightKG, text);
}
export function clickHandlingRadio(radio: ("stable" | "neutral" | "agile")): void {
    // TODO
}
type skillLevel = "beginner" | "novice" | "intermediate" | "advanced" | "expert" | "professional";
export function slideSkillLevelSlider(skillLevel: skillLevel): void {
    // TODO
}
export function enterReachMMValue(text: string): void {
    user.type(FormElements.reachMM, text);
}
export function enterReachInchesValue(text: string): void {
    user.type(FormElements.reachInches, text);
}
export function enterStackMMValue(text: string): void {
    user.type(FormElements.stackMM, text);
}
export function enterStackInchesValue(text: string): void {
    user.type(FormElements.stackInches, text);
}
export function clickBikeTypeRadio(radio: ("enduro" | "trail")): void {
    // TODO
}