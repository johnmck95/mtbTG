/* The array is a const, not the objects inside it */
const errorCodes = [
    {
        errorNumber: 0,
        errorMessage: "Please enter a valid integer for Height (feet)", // may need to update this description to exclude - numbers
        showError: false,
    },
    {
        errorNumber: 1,
        errorMessage: "Please enter a non-negative numeric value less than 12 for Height (inches)",
        showError: false,
    },
    {
        errorNumber: 2,
        errorMessage: "Please enter a numeric Height between 5'0 and 6'6",
        showError: false,
    },
    {
        errorNumber: 3,
        errorMessage: "Please enter a numeric Height between 152.4cm and 198cm",
        showError: false,
    },
    {
        errorNumber: 4,
        errorMessage: "Please select a Handling preference",
        showError: false,
    },
    {
        errorNumber: 5,
        errorMessage: "Please enter a numeric reach value between 400mm and 550mm",
        showError: false,
    },
    {
        errorNumber: 6,
        errorMessage: "Please enter a numeric reach value between 15.75 - 21.65 inches",
        showError: false,
    },
    {
        errorNumber: 7,
        errorMessage: "Please enter a numeric stack value between 550m and 680mm",
        showError: false,
    },
    {
        errorNumber: 8,
        errorMessage: "Please enter a numeric stack value between 21.65 - 26.77 inches",
        showError: false,
    },
    {
        errorNumber: 9,
        errorMessage: "Please select a Bike Type",
        showError: false,
    },
    {
        errorNumber: 10,
        errorMessage: "Please enter a numeric weight between 80 and 240 pounds",
        showError: false,
    },
    {
        errorNumber: 11,
        errorMessage: "Please enter a numeric weight between 36 and 109 kilograms",
        showError: false,
    },
    {
        errorNumber: 12,
        errorMessage: "Please select a Skill Level",
        showError: false,
    }
]

export {errorCodes}
