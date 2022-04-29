import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
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
        test("Label", () => {
            expect(screen.getByText("Skill Level"))
        })
        test("Renders the skillSlider",  () => {
            expect(screen.getByRole("slider"))
        })
        test.todo("Slider is in position 3 and is de-selected")
            // const slioderKnob = screen.queryByRole("input", {hidden: true})
            // expect(sliderKnob).toHaveValue(3)
    })
    describe("Reach (mm) ", () => {
        test("Label ", () => {
            expect(screen.getByText("Reach (mm)"))
        })
        test("Placeholder value of 475", () => {
            expect(screen.getByPlaceholderText("475"))
        })
    })
    describe("Stack (mm) ", () => {
        test("Label ", () => {
            expect(screen.getByText("Stack (mm)"))
        })
        test("Placeholder value of 620", () => {
            expect(screen.getByPlaceholderText("620"))
        })
    })
    describe("Bike Type ", () => {
        test("Label ", () => {
            expect(screen.getByText("Bike Type"))
        })
        test("Enduro custom radio button", () => {
            expect(screen.getByText("Enduro"))
        })
        test("Trail custom radio button", () => {
            expect(screen.getByText("Trail"))
        })
    })
})

describe("When Rider Metrics are changed from imperial to metric ", () => {
    beforeEach(() => {
        render(<Home/>)
        user.click(screen.getByTestId("imperialRiderButton"))
    })
    test("Height (feet) is no longer present", () => {
        expect(screen.queryByLabelText("Height (feet)")).not.toBeInTheDocument();
    })
    test("Height (inches) is no longer present", () => {
        expect(screen.queryByLabelText("Height (inches)")).not.toBeInTheDocument()
    })
    describe("Height (cm) ", () => {
        test("Label appears", () => {
            expect(screen.getByLabelText("Height (cm)"))
        })
        test("Placeholder value of 178 appears", () => {
            expect(screen.getByPlaceholderText("178"))
        })
    })
    describe("Weight (kg) ", () => {
        test("Label appears", () => {
            expect(screen.getByLabelText("Weight (kg)"))
        })
        test("Placeholder value of 77 kg appears", () => {
            expect(screen.getByPlaceholderText("77"))
        })
    })
})

describe("When Bike Metrics are changed from metric to imperial ", () => {
    beforeEach(() => {
        render(<Home/>)
        user.click(screen.getByTestId("imperialBikeButton"))
    })
    test("Reach (mm) is no longer present", () => {
        expect(screen.queryByLabelText("Reach (mm)")).not.toBeInTheDocument()
    })
    test("Stack (mm) is no longer present", () => {
        expect(screen.queryByLabelText("Stack (mm)")).not.toBeInTheDocument()
    })
    describe("Reach (inches) ", () => {
        test("Label appears", () => {
            expect(screen.getByLabelText("Reach (inches)"))
        })
        test("Placeholder value of 18.70 appears", () => {
            expect(screen.getByPlaceholderText("18.70"))
        })
    })
    describe("Stack (inches) ", () => {
        test("Label appears", () => {
            expect(screen.getByLabelText("Stack (inches)"))
        })
        test("Placeholder value of 24.41 appears", () => {
            expect(screen.getByPlaceholderText("24.41"))
        })
    })
})

describe("Converting Rider Metrics from Imperial to Metic ", () => {
    beforeEach(() => {
        render(<Home/>)
    })
    test.each([
        ['5', '0', '152.4000'],
        ['5', '7', '170.1800'],
        ['5', '7.5', '171.4500'],
        ['5', '11', '180.3400'],
        ['5', '11.98', '182.8292'],
        ['6', '6', '198.1200'],
    ])('should yield %i\'%f = %f', (feetIn, inchesIn, cmOut) => {
        user.type(screen.getByLabelText("Height (feet)"), feetIn)
        user.type(screen.getByLabelText("Height (inches)"), inchesIn)
        user.click(screen.getByTestId("imperialRiderButton"))
        expect(screen.getByDisplayValue(cmOut)).toBeInTheDocument();
    })
   describe("Then converting back to Imperial from Metric should have the original result of ", () => {
        test.each([
            ['5', '0', '5', '0.0000'],
            ['5', '7', '5', '7.0000'],
            ['5', '7.5', '5', '7.5000'],
            ['5', '11', '5', '11.0000'],
            ['5', '11.98', '5', '11.9800'],
            ['6', '6', '6', '6.0000']
        ])('%f\'%f', (feetIn, inchesIn, feetOut, inchesOut) => {
            user.type(screen.getByLabelText("Height (feet)"), feetIn)
            user.type(screen.getByLabelText("Height (inches)"), inchesIn)
            user.click(screen.getByTestId("imperialRiderButton"))
            user.click(screen.getByTestId("imperialRiderButton"))
            expect(screen.getByDisplayValue(feetOut)).toBeInTheDocument();
            expect(screen.getByDisplayValue(inchesOut)).toBeInTheDocument();
        })
    })
    test.each([
        ['80', '36.2874'],
        ['100', '45.3592'],
    ])('should yield %flb = %fkg', (weightLB, weightKG) => {
        user.type(screen.getByLabelText("Weight (lb)"), weightLB)
        user.click(screen.getByTestId("imperialRiderButton"))
        expect(screen.getByDisplayValue(weightKG)).toBeInTheDocument();
    })
})


/** COMPLETE THE WEIGHT TESTS FIRST THEN COMPLETE THIS SECTION */
// describe("Converting Bike Metrics from Metic to Imperial",  () => {
//     beforeEach(() => {
//         render(<Home/>)
//     })
//     test.each([
//         ['475', '18.7008']
//     ])('should yield %f = %f', (mmIn, inchesOut) => {

//     })
// })