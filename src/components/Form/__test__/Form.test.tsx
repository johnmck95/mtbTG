import { render } from "@testing-library/react";

describe("The default form contains ", () => {
    describe("Height (feet) ", () => {
        test.todo("Label")
        test.todo("Placeholder value of 5")
    })
    describe("Height (inches) ", () => {
        test.todo("Label")
        test.todo("Placeholder value of 10")
    })
    describe("Weight (lb) ", () => {
        test.todo("Label")
        test.todo("Placeholder value of 170")
    })
    describe("Handling ", () => {
        test.todo("Label")
        test.todo("Stable custom radio button")
        test.todo("Neutral custom radio button")
        test.todo("Agile custom radio button")
        test.todo("With all custom radio buttons de-selected")
    })
    describe("Skill Level ", () => {
        test.todo("Label")
        test.todo("Slider is in position 3 and is de-selected")
    })
    describe("Reach (mm) ", () => {
        test.todo("Label ")
        test.todo("Placeholder value of 475")
    })
    describe("Stack (mm) ", () => {
        test.todo("Label")
        test.todo("Placeholder value of 620")
    })
    describe("Bike Type ", () => {
        test.todo("Label ")
        test.todo("Enduro custom radio button")
        test.todo("Trail custom radio button")
        test.todo("With all custom radio buttons de-selected")
    })
    test.todo("Rider Metrics to be imperial")
    test.todo("Bike Metrics to be metric")

})

describe("When Rider Metrics are changed from imperial to metric ", () => {
    test.todo("Height (feet) is no longer present ")
    test.todo("Height (inches) is no longer present ")
    describe("Height (cm) ", () => {
        test.todo("Label appears")
        test.todo("Placeholder value of 178 appears")
    })
    describe("Weight (kg) ", () => {
        test.todo("Label appears")
        test.todo("Placeholder value of 77 kg appears")
    })
})

describe("When Bike Metrics are changed from metric to imperial ", () => {
    test.todo("Reach (mm) is no longer present")
    describe("Reach (inches) ", () => {
        test.todo("Label appears ")
        test.todo("Placeholder value of 18.71 appears")
    })
    test.todo("Stack (mm) is no longer present")
    describe("Stack (inches) ", () => {
        test.todo("Label appears ")
        test.todo("Placeholder value of 24.41 appears")
    })
})
