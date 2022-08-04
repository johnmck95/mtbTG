import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    ])('should yield %i\'%f" = %fcm', (feetIn, inchesIn, cmOut) => {
        user.type(screen.getByLabelText("Height (feet)"), feetIn)
        user.type(screen.getByLabelText("Height (inches)"), inchesIn)
        user.click(screen.getByTestId("imperialRiderButton"))
        expect(screen.getByDisplayValue(cmOut)).toBeInTheDocument();
    })
    test.each([
        ['80', '36.2874'],
        ['99.999', '45.3588'],
        ['100', '45.3592'],
        ['182.1', '82.5992'],
        ['240', '108.8622']
    ])('should yield %flb = %fkg', (weightLB, weightKG) => {
        user.type(screen.getByLabelText("Weight (lb)"), weightLB)
        user.click(screen.getByTestId("imperialRiderButton"))
        expect(screen.getByDisplayValue(weightKG)).toBeInTheDocument();
    })
   describe("Then converting back to Imperial from Metric should have ", () => {
        test.each([
            ['5', '0', '5', '0.0000'],
            ['5', '7', '5', '7.0000'],
            ['5', '7.5', '5', '7.5000'],
            ['5', '11', '5', '11.0000'],
            ['5', '11.98', '5', '11.9800'],
            ['6', '6', '6', '6.0000']
        ])('the original result of %f\'%f"', (feetIn, inchesIn, feetOut, inchesOut) => {
            user.type(screen.getByLabelText("Height (feet)"), feetIn)
            user.type(screen.getByLabelText("Height (inches)"), inchesIn)
            user.click(screen.getByTestId("imperialRiderButton"))
            user.click(screen.getByTestId("imperialRiderButton"))
            expect(screen.getByDisplayValue(feetOut)).toBeInTheDocument();
            expect(screen.getByDisplayValue(inchesOut)).toBeInTheDocument();
        })
        test.each([
            ['80', '80.0000'],
            ['99.999', '99.9990'],
            ['100', '99.9999'],
            ['182.1', '182.1001'],
            ['240', '240.0001']
        ])('the close to original value of %flb', (weightLBIn, weightLBOut) => {
            user.type(screen.getByLabelText("Weight (lb)"), weightLBIn)
            user.click(screen.getByTestId("imperialRiderButton"))
            user.click(screen.getByTestId("imperialRiderButton"))
            expect(screen.getByDisplayValue(weightLBOut)).toBeInTheDocument();
        })
    })

})


describe("Converting Bike Metrics from Metic to Imperial",  () => {
    beforeEach(() => {
        render(<Home/>)
    })
    test.each([
        ['400','15.7480'],
        ['400.10', '15.7520'],
        ['475', '18.7008'],
        ['499.9999', '19.6850'],
        ['549.67', '21.6406'],
        ['550', '21.6535']
    ])('should yield Reach values %fmm = %f"', (reachMMIn, reachInchesOut) => {
        user.type(screen.getByLabelText("Reach (mm)"), reachMMIn)
        user.click(screen.getByTestId("imperialBikeButton"))
        expect(screen.getByDisplayValue(reachInchesOut)).toBeInTheDocument()
    })
    test.each([
        ['550','21.6535'],
        ['550.123', '21.6584'],
        ['600.001', '23.6221'],
        ['640', '25.1969'],
        ['679.99', '26.7713'],
        ['680', '26.7717']
    ])('should yield Stack values %fmm = %f"', (stackMMIn, stackInchesOut) => {
        user.type(screen.getByLabelText("Stack (mm)"), stackMMIn)
        user.click(screen.getByTestId("imperialBikeButton"))
        expect(screen.getByDisplayValue(stackInchesOut)).toBeInTheDocument()
    })

    describe("Then converting back to Metric from Imperial should have ", () => {
        test.each([
            ['400','399.9992'],
            ['400.10', '400.1008'],
            ['475', '475.0003'],
            ['499.9999', '499.9990'],
            ['549.67', '549.6712'],
            ['550', '549.9989']
        ])('the close to original Reach values %fmm = %fmm', (reachMMIn, reachMMOut) => {
            user.type(screen.getByLabelText("Reach (mm)"), reachMMIn)
            user.click(screen.getByTestId("imperialBikeButton"))
            user.click(screen.getByTestId("imperialBikeButton"))
            expect(screen.getByDisplayValue(reachMMOut)).toBeInTheDocument()
        })

        test.each([
            ['500','499.9990'],
            ['500.123', '500.1235'],
            ['600.001', '600.0013'],
            ['640', '640.0013'],
            ['679.99', '679.9910'],
            ['680', '680.0012']
        ])('the close to original Stack values %fmm = %fmm', (stackMMIn, stackMMOut) => {
            user.type(screen.getByLabelText("Stack (mm)"), stackMMIn)
            user.click(screen.getByTestId("imperialBikeButton"))
            user.click(screen.getByTestId("imperialBikeButton"))
            expect(screen.getByDisplayValue(stackMMOut)).toBeInTheDocument()
        })
    })
})

describe("After clicking the 'edit' button to return to the Form page ", () => {
    beforeEach( () => {
        render(<Home/>)
        user.type(screen.getByLabelText("Height (feet)"), '5')
        user.type(screen.getByLabelText("Height (inches)"), '10')
        user.type(screen.getByLabelText("Weight (lb)"), '170')
        user.click(screen.getByText("Neutral"))
        user.click(screen.getByTestId("sliderValue"))
        fireEvent.change(screen.getByTestId("sliderValue"), {value: "5"})
        user.type(screen.getByLabelText("Reach (mm)"), '475')
        user.type(screen.getByLabelText("Stack (mm)"), '620')
        user.click(screen.getByText("Enduro"))
        user.click(screen.getByRole("button", {name: "Calculate"}))
        screen.getByText("YOUR SETTINGS")
        user.click(screen.getByRole('button', {name: 'Edit'}))
        screen.getByText("RIDER METRICS")
    })

    test.each([
        ['-1'],
        ['a'],
        ['five'],
        ['-2147483647'],
        ['5.2'],
        ['6.678'],
    ])('Changing Height (feet) to an invalid value [%s] will not allow you to proceed to the Output page', (heightFeet) => {
        user.clear(screen.getByLabelText("Height (feet)"))
        user.type(screen.getByLabelText("Height (feet)"), heightFeet)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a valid integer for Height (feet)"))
    })

    test.each([
        ['-1'],
        ['12'],
        ['-0.0000001'],
        ['six'],
        ['59.8'],
    ])('Changing Height (inches) to an invalid value [%s] will not allow you to proceed to the Output page', (heightInches) => {
        user.clear(screen.getByLabelText("Height (inches)"))
        user.type(screen.getByLabelText("Height (inches)"), heightInches)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a non-negative value less than 12 for Height (inches)"))
    })

    test.each([
        ['6', '6.00000001'],
        ['6', '6.1'],
        ['6', '11'],
        ['6', '11.9999'],
    ])('When Height (feet) & Height (inches) are both valid [%s\'%s\"], but Total Height is invalid, you cannot proceed to the Output page', (heightFeet, heightInches) => {
        user.clear(screen.getByLabelText("Height (feet)"))
        user.type(screen.getByLabelText("Height (feet)"), heightFeet)
        user.clear(screen.getByLabelText("Height (inches)"))
        user.type(screen.getByLabelText("Height (inches)"), heightInches)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a Height between 5'0 and 6'6"))
    })

    test.each([
        ['150'],
        ['152.3999'],
        ['152'],
        ['198.0000001'],
        ['-155'],
        ['One Hundered Fifty Five'],
        ['200'],
    ])('Changing Height (cm) to an invalid value [%s] will not allow you to proceed to the Output page', (heightCM) => {
        user.click(screen.getByTestId("imperialRiderButton"))
        user.clear(screen.getByLabelText("Height (cm)"))
        user.type(screen.getByLabelText("Height (cm)"), heightCM)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a Height between 152.4cm and 198cm"))
    })

    test.each([
        ['79.99999'],
        ['0'],
        ['-152'],
        ['240.00000001'],
        ['240.1'],
        ['One Hundered Fifty Five'],
    ])('Changing Weight (lb) to an invalid value [%s] will not allow you to proceed to the Output page', (weightLB) => {
        user.clear(screen.getByLabelText("Weight (lb)"))
        user.type(screen.getByLabelText("Weight (lb)"), weightLB)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a weight between 80 and 240 pounds"))
    })

    test.each([
        ['35.999999'],
        ['0'],
        ['109.00001'],
        ['-152'],
        ['-89'],
        ['sixty five'],
    ])('Changing Weight (kg) to an invalid value [%s] will not allow you to proceed to the Output page', (weightKG) => {
        user.click(screen.getByTestId("imperialRiderButton"))
        user.clear(screen.getByLabelText("Weight (kg)"))
        user.type(screen.getByLabelText("Weight (kg)"), weightKG)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a weight between 36 and 109 kilograms"))
    })

    test.each([
        ['399.99999999'],
        ['399'],
        ['550.000000001'],
        ['551'],
        ['-475'],
        ['five hundred'],
    ])('Changing Reach (mm) to an invalid value [%s] will not allow you to proceed to the Output page', (reachMM) => {
        user.clear(screen.getByLabelText("Reach (mm)"))
        user.type(screen.getByLabelText("Reach (mm)"), reachMM)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a reach value between 400mm and 550mm"))
    })

    test.each([
        ['15.7495'],
        ['-16'],
        ['seventeen'],
        ['21.6501'],
        ['22'],
    ])('Changing Reach (inches) to an invalid value [%s] will not allow you to proceed to the Output page', (reachInches) => {
        user.click(screen.getByTestId("imperialBikeButton"))
        user.clear(screen.getByLabelText("Reach (inches)"))
        user.type(screen.getByLabelText("Reach (inches)"), reachInches)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a reach value between 15.75 - 21.65 inches"))

    })

    test.each([
        ['549'],
        ['549.9999999'],
        ['-565'],
        ['580+25'],
        ['680.001'],
        ['700'],
    ])('Changing Stack (mm) to an invalid value [%s] will not allow you to proceed to the Output page', (stackMM) => {
        user.clear(screen.getByLabelText("Stack (mm)"))
        user.type(screen.getByLabelText("Stack (mm)"), stackMM)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a stack value between 550m and 680mm"))
    })

    test.each([
        ['21.649'],
        ['20'],
        ['-25'],
        ['--25'],
        ['26.7700001'],
        ['twenty-five'],
    ])('Changing Stack (inches) to an invalid value [%s] will not allow you to proceed to the Output page', (reachInches) => {
        user.click(screen.getByTestId("imperialBikeButton"))
        user.clear(screen.getByLabelText("Stack (inches)"))
        user.type(screen.getByLabelText("Stack (inches)"), reachInches)
        user.click(screen.getByRole("button", {name: "Calculate"}))
        expect(screen.getByText("Please enter a stack value between 21.65 - 26.77 inches"))
    })
})

describe("Error Handling ", () => {
    xdescribe("For Height (feet): ", () => {
        xit("Displays error[0] when value is not an integer (#.#)")
        xit("Does not display error[0] when value is an integer followed by a decimal (#.)")
        xit("Displays error[0] when value is negative")
        xit("Displays error[0] when value includes the letter 'e'")
        xit("Displays error[0] when value includes the symbol '-'")
        xit("Displays error[0] when value includes the symbol '+'")
        xit("Does not display error[0] when value is 0")
        xit("Does not display error[0] when value is less than 5")
        xit("Does not display error[0] when value is greater than 6")
    })
    xdescribe("For Height (inches): ", () => {
        xit("Does not display error[1] when value is 0")
        xit("Does not display error[1] when decimals are provided (#.#)")
        xit("Displays error[1] when value is 12")
        xit("Displays error[1] when value is larger than 12")
        xit("Displays error[1] when value is negative")
        xit("Displays error[1] when value includes the letter 'e'")
        xit("Displays error[1] when value includes the symbol '-'")
        xit("Displays error[1] when value includes the symbol '+'")
    })
    xdescribe("For Imperial Height: ", () => {
        xit("Displays error[2] for 4'11.999999")
        xit("Displays error[2] for 6'6.0000001")
        xit("Does not display error[2] for 5'0")
        xit("Does not display error[2] for 5'11.9999")
        xit("Does not display error[2] for 6'6")
    })
    xdescribe("For Metric Height: ", () => {
        xit("Displays error[3] when value is negative")
        xit("Displays error[3] when value is 0")
        xit("Displays error[3] when value is 152.3999999")
        xit("Displays error[3] when value is 198.0000001")
        xit("Displays error[3] when value includes the letter 'e'")
        xit("Displays error[3] when value includes the symbol '-'")
        xit("Displays error[3] when value includes the symbol '+'")
        xit("Does not display error[3] when value is valid (parameterized)")
    })
    xdescribe("For Imperial Weight: ", () => {
        xit("Displays error[10] when value is 79.999999")
        xit("Displays error[10] when value is 240.00001")
        xit("Displays error[10] when value is 0")
        xit("Displays error[10] when value includes the letter 'e'")
        xit("Displays error[10] when value includes the symbol '-'")
        xit("Displays error[10] when value includes the symbol '+'")
        xit("Does not display error[10] for valid weights (parameterized)")
    })
    xdescribe("For Metric Weight: ", () => {
        xit("Does not display error[11] for valid weights (parameterized)")
        xit("Displays error[11] when value is 35.99999")
        xit("Displays error[11] when value is 109.0000001")
        xit("Displays error[11] when value is 0")
        xit("Displays error[11] when value includes the letter 'e'")
        xit("Displays error[11] when value includes the symbol '-'")
        xit("Displays error[11] when value includes the symbol '+'")
    })
    xdescribe("For Handling Preference: ", () => {
        xit("Displays error[4] when no handling preference is selected")
        xit("Does not display error[4] when each value is selected (parameterized)")
    })
    xdescribe("For Skill Level: ", () => {
        xit("Displays error[12] when no skill level is selected")
        xit("Does not display error[12] when each skill level is selected (parameterized)")
    })
    
    xdescribe("For Metric Reach Value: ", () => {
        xit("Does not display error[5] for valid reache values (parameterized)")
        xit("Displays error[5] when value is 399.99999")
        xit("Displays error[5] when value is 550.0000001")
        xit("Displays error[5] when value is 0")
        xit("Displays error[5] when value includes the letter 'e'")
        xit("Displays error[5] when value includes the symbol '-'")
        xit("Displays error[5] when value includes the symbol '+'")
    })
    xdescribe("For Imperial Reach Value: ", () => {
        xit("Does not display error[6] for valid reache values (parameterized)")
        xit("Displays error[6] when value is 15.7499999")
        xit("Displays error[6] when value is 21.6500001")
        xit("Displays error[6] when value is 0")
        xit("Displays error[6] when value includes the letter 'e'")
        xit("Displays error[6] when value includes the symbol '-'")
        xit("Displays error[6] when value includes the symbol '+'")
    })
    xdescribe("For Metric Stack Value: ", () => {
        xit("Does not display error[7] for valid stack values (parameterized)")
        xit("Displays error[7] when value is 549.9999")
        xit("Displays error[7] when value is 680.0000001")
        xit("Displays error[7] when value is 0")
        xit("Displays error[7] when value includes the letter 'e'")
        xit("Displays error[7] when value includes the symbol '-'")
        xit("Displays error[7] when value includes the symbol '+'")
    })
    xdescribe("For Imperial Stack Value: ", () => {
        xit("Does not display error[8] for valid stack values (parameterized)")
        xit("Displays error[8] when value is 21.6499999")
        xit("Displays error[8] when value is 26.7700001")
        xit("Displays error[8] when value is 0")
        xit("Displays error[8] when value includes the letter 'e'")
        xit("Displays error[8] when value includes the symbol '-'")
        xit("Displays error[8] when value includes the symbol '+'")
    })
    xdescribe("For Bike Type: ", () => {
        xit("Displays error[9] when no bike type is selected")
        xit("Does not display error[9] when each bike types are selected (parameterized)")
    })


    xdescribe("Submitting an empty form as a Metric Rider ", () => {
        xit("Does not show any imperial rider errors")
        xit("Shows all metric rider errors")
        xit("Then toggling to imperial rider converts all metric rider errors to imperial rider errors")
    })
    xdescribe("Submitting an empty form as an Imperial Rider: ", () => {
        xit("Does not show any metric rider errors")
        xit("Shows all imperial rider errors")
        xit("Then toggling to metric rider converts all imperial rider errors to metric rider errors")

    })
    xdescribe("Submitting an empty form as a Metric Bike: ", () => {
        xit("Does not show any imperial bike errors")
        xit("Shows all metric bike errors")
        xit("Then toggling to imperial bike converts all metric bike errors to imperial bike errors")
    })
    xdescribe("Submitting an empty form as an Imperial Bike: ", () => {
        xit("Does not show any metric bike errors")
        xit("Shows all imperial bike errors")
        xit("Then toggling to metric bike converts all imperial bike errors to metric bike errors")

    })
})

/*         FUTURE TESTS 

 1. Ensure the Form & Output display the same ImperialRider and imperialBike units
 2. When a conversion has a slight rounding error a value may be valid for LB and invalid for KG. 
    When the unit is toggled, the error should still be caught
 3. Toggling between Form and Output page should always render the same values

*/
