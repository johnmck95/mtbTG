import { render, screen } from "@testing-library/react";
import Form from "../../../components/Form/Form"
import Home from "../../../pages/Home/Home"

describe("The default form contains ", () => {
    beforeEach(() => {
        render(<Home/>)
    })
    describe("Height (feet) ", () => {
        test("Label", () => {
            expect(screen.getByLabelText("Height (feet)"))
        })
        test("Placeholder value of 5", () => {
            expect(screen.getByPlaceholderText("5"))
        })
    })
    describe("Height (inches) ", () => {
        test("Label", () => {
            expect(screen.getByLabelText("Height (inches)"))
        })
        test("Placeholder value of 10", () => {
            expect(screen.getByPlaceholderText("10"))
        })
    })
    describe("Weight (lb) ", () => {
        test("Label", () => {
            expect(screen.getByLabelText("Weight (lb)"))
        })
        test("Placeholder value of 10", () => {
            expect(screen.getByPlaceholderText("170"))
        })
    })
    describe("Handling ", () => {
        test("Label", () => {
            //.byLabelText() not valid when a <label/> has a for={} attribute
            expect(screen.getByText("Handling"))
        })
        test("Stable custom radio button", () => {
            expect(screen.getByText("Stable"))
        })
        test("Neutral custom radio button", () => {
            expect(screen.getByText("Neutral"))
        })
        test("Agile custom radio button", () => {
            expect(screen.getByText("Agile"))
        })
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
        test.todo("Placeholder value of 18.70 appears")
    })
    test.todo("Stack (mm) is no longer present")
    describe("Stack (inches) ", () => {
        test.todo("Label appears ")
        test.todo("Placeholder value of 24.41 appears")
    })
})
