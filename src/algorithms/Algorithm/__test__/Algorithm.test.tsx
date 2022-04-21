import { render, screen } from "@testing-library/react";
import Algorithm from "../Algorithm"
import Output from "../../../components/Output/Output"

describe("Initialize the inputs", () => {
    let inputs = {
        heightFeet: "",
        heightInches: "",
        heightCM: "",
        weightLB: "",
        weightKG: "",
        handling: "",
        skillLevel: "",
        reachInches: "",
        reachMM: "",
        stackInches: "",
        stackMM: "",
        bikeType: ""
    }
    // Start with a clean set of inputs for each test
    beforeEach(() => {
        inputs = {
            heightFeet: "",
            heightInches: "",
            heightCM: "",
            weightLB: "",
            weightKG: "",
            handling: "",
            skillLevel: "",
            reachInches: "",
            reachMM: "",
            stackInches: "",
            stackMM: "",
            bikeType: ""
        }
    })


    /* Handlebar width should be rounded to nearest mm */
    //** HANDLEBAR WIDTH */
    test.todo("Bar width for person 5'0 is 743mm")

    test.todo("Bar width for person 5'11 is ___")

    test.todo("Bar width for person 6'0 is ___")

    test.todo("Bar width for person 6'2 is ___")

    test.todo("Bar width for person 6'6 is ___")


    //** HANDLEBAR RISE */

    //** STEM LENGTH */

    //** STEM SPACERS */


    
    //-------------------------------//
    //* START OF TIRE PRESSURE TESTS */
    //-------------------------------//

    // **** BEGINNERS **** //
    test("80lb beginnner rider on trail bike: No inserts, 15psi front & 16psi rear", () => {
        inputs.skillLevel = 'beginner'
        inputs.weightLB = '80'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("15psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("16psi")
    })

    test("80lb beginnner rider on enduro bike: No inserts, 16psi front, 17psi rear", () => {
        inputs.skillLevel = 'beginner'
        inputs.weightLB = '80'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("16psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("17psi")
    })

    test("240lb beginnner rider on trail bike: No inserts, 25psi front, 26psi rear", () => {
        inputs.skillLevel = 'beginner'
        inputs.weightLB = '240'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("25psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("26psi")
    })

    test("240lb beginnner rider on enduro bike: No inserts, 26psi front, 27psi rear", () => {
        inputs.skillLevel = 'beginner'
        inputs.weightLB = '240'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("26psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("27psi")
    })

    // **** NOVICES **** //
    test("80lb novice rider on trail bike: No inserts, 15psi front, 16psi rear", () => {
        inputs.skillLevel = 'novice'
        inputs.weightLB = '80'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("15psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("16psi")
    })

    test("80lb novice rider on enduro bike: No inserts, 16psi front, 17psi rear", () => {
        inputs.skillLevel = 'novice'
        inputs.weightLB = '80'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("16psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("17psi")
    })

    test("240lb novice rider on trail bike: No inserts, 27psi front, 28psi rear", () => {
        inputs.skillLevel = 'novice'
        inputs.weightLB = '240'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("27psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("28psi")
    })

    test("240lb novice rider on enduro bike: No inserts, 28psi front, 29psi rear", () => {
        inputs.skillLevel = 'novice'
        inputs.weightLB = '240'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("28psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("29psi")
    })

    // **** INTERMEDIATES **** //

    test("80lb intermediate rider on trail bike: No inserts, 16psi front, 17psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '80'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("16psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("17psi")
    })

    test("80lb intermediate rider on enduro bike: No inserts, 18psi front, 19psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '80'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("18psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("19psi")
    })

    test("199.99lb intermediate rider on trail bike: No inserts, 26psi front, 28psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '199.99'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("26psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("28psi")
    })

    test("199.99lb intermediate rider on enduro bike: No inserts, 28psi front, 30psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '199.99'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("28psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("30psi")
    })

    test("200lb intermediate rider on trail bike: Yes inserts, 22psi front, 24psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '200'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("22psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("24psi")
    })

    test("200lb intermediate rider on enduro bike: Yes inserts, 24psi front, 26psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '200'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("24psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("26psi")
    })

    test("240lb intermediate rider on trail bike: Yes inserts, 24psi front, 26psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '240'
        inputs.bikeType = 'trail'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("24psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("26psi")
    })

    test("240lb intermediate rider on enduro bike: Yes inserts, 26psi front, 28psi rear", () => {
        inputs.skillLevel = 'intermediate'
        inputs.weightLB = '240'
        inputs.bikeType = 'enduro'
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("frontTireOutput")).toHaveTextContent("26psi")
        expect(screen.getByTestId("rearTireOutput")).toHaveTextContent("28psi")
    })

    // **** ADVANCED **** //

    //-----------------------------//
    //* END OF TIRE PRESSURE TESTS */
    //-----------------------------//


    //------------------------------//
    //* START OF TIRE INSERTS TESTS */
    //------------------------------//
    test("NO inserts for beginner riders", () => {
        inputs.skillLevel="beginner"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("No")
    })

    test("NO inserts for novice riders", () => {
        inputs.skillLevel="novice"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("No")
    })

    test("YES inserts for intermediate riders >= 200 lbs", () =>{
        inputs.skillLevel="intermediate"
        inputs.weightLB = "200"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("Yes")
    })

    test("NO inserts for intermediate riders < 200 lbs", () => {
        inputs.skillLevel="intermediate"
        inputs.weightLB = "199.9"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("No")
    })

    test("YES inserts for advanced riders >= 155 lbs", () =>{
        inputs.skillLevel="advanced"
        inputs.weightLB = "155"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("Yes")
    })

    test("NO inserts for advanced riders < 155 lbs", () =>{
        inputs.skillLevel="advanced"
        inputs.weightLB = "154"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("No")
    })

    test("YES inserts for expert riders >= 140 lbs", () => {
        inputs.skillLevel="expert"
        inputs.weightLB = "140"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("Yes")
    })
    
    test("NO inserts for expert riders < 140 lbs", () => {
        inputs.skillLevel="expert"
        inputs.weightLB = "139.999"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("No")
    })

    test("YES inserts for professional riders >= 140 lbs", () => {
        inputs.skillLevel="professional"
        inputs.weightLB = "140"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("Yes")
    })
    test("NO inserts for professional riders < 140 lbs", () => {
        inputs.skillLevel="professional"
        inputs.weightLB = "139.999"
        const outputs = Algorithm(inputs)
        render(<Output inputs={inputs} outputs={outputs}/>)
        expect(screen.getByTestId("insertsOutput")).toHaveTextContent("No")
    })
    //----------------------------//
    //* END OF TIRE INSERTS TESTS */
    //----------------------------//
})
