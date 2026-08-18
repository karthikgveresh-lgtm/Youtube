class ApiError extends Error {
    constructor(
        ststusCode,
        message = "Something went Wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.ststusCode = ststusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = this.errors

        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }