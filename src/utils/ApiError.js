class ApiError extends Error {
    constructor(
        ststusCode,
        message = "Something went Wrong",
        error = [],
        stack = ""
    ) {
        super(message)
    }
}