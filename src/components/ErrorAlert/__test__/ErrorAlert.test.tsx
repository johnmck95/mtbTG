import { render } from "@testing-library/react";
import ErrorAlert from './../ErrorAlert'
import {errorCodes} from "./../../../data/ErrorCodes"

test("error alert renders without error", () => {
    const { getByText } = render(<ErrorAlert errorMessage="test message" />);
    getByText("test message");
  });

test("correctly reads from ErrorCodes.ts", () =>{
    const { getByText } = render(<ErrorAlert errorMessage={errorCodes[1].errorMessage} />);
    getByText("Please enter a postive value less than 12 for Height (inches)")
})
